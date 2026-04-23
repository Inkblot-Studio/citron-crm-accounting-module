/**
 * OfferDocument — the single source of truth for how an offer looks AND how
 * it's edited. Pass `editable` to get a full WYSIWYG canvas; omit it for a
 * read-only preview (PDF / list thumbnails).
 *
 * Why one component? Because WYSIWYG offers literally guarantee the preview
 * matches the result: you're editing the preview. No separate "form pane".
 *
 * Block model lives in offerDraft.ts. This file is the renderer.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ArrowDown, ArrowUp, Copy, Plus, Trash2, X } from 'lucide-react'
import { bgDocumentTypeById } from './accountingConstants'
import {
  BLOCK_KIND_LABEL,
  cloneBlock,
  createBlock,
  formatMoney,
  formatMoneyRange,
  newSupportPlan,
  offerGrandTotal,
  offerVatAmount,
  type FeatureBlock,
  type HeadingBlock,
  type OfferBlock,
  type OfferBlockKind,
  type OfferCurrency,
  type OfferDraft,
  type OfferSupportPlan,
  type ParagraphBlock,
  type PlansBlock,
  type PricingBlock,
} from './offerDraft'

/* ─── Public API ─────────────────────────────────────────────────────────── */

export interface OfferDocumentProps {
  draft: OfferDraft
  documentId?: string
  className?: string
  /** Omit for read-only rendering (list cards, PDF export). */
  editable?: {
    onChange: (draft: OfferDraft) => void
  }
}

export default function OfferDocument({
  draft,
  documentId = 'offer-document',
  className = '',
  editable,
}: OfferDocumentProps) {
  const editMode = editable != null

  const patchDraft = useCallback(
    (p: Partial<OfferDraft>) => editable?.onChange({ ...draft, ...p }),
    [draft, editable],
  )

  const patchBlock = useCallback(
    <B extends OfferBlock>(id: string, updater: (b: B) => B) => {
      if (!editable) return
      editable.onChange({
        ...draft,
        blocks: draft.blocks.map((b) => (b.id === id ? updater(b as B) : b)),
      })
    },
    [draft, editable],
  )

  const moveBlock = useCallback(
    (id: string, dir: -1 | 1) => {
      if (!editable) return
      const i = draft.blocks.findIndex((b) => b.id === id)
      if (i < 0) return
      const j = i + dir
      if (j < 0 || j >= draft.blocks.length) return
      const next = [...draft.blocks]
      const [moved] = next.splice(i, 1)
      if (!moved) return
      next.splice(j, 0, moved)
      editable.onChange({ ...draft, blocks: next })
    },
    [draft, editable],
  )

  const duplicateBlock = useCallback(
    (id: string) => {
      if (!editable) return
      const src = draft.blocks.find((b) => b.id === id)
      if (!src) return
      const i = draft.blocks.findIndex((b) => b.id === id)
      const copy = cloneBlock(src)
      const next = [...draft.blocks]
      next.splice(i + 1, 0, copy)
      editable.onChange({ ...draft, blocks: next })
      setSelected(copy.id)
    },
    [draft, editable],
  )

  const deleteBlock = useCallback(
    (id: string) => {
      if (!editable) return
      const next = draft.blocks.filter((b) => b.id !== id)
      editable.onChange({ ...draft, blocks: next.length > 0 ? next : [createBlock('paragraph')] })
    },
    [draft, editable],
  )

  const insertBlockAt = useCallback(
    (index: number, kind: OfferBlockKind) => {
      if (!editable) return
      const block = createBlock(kind)
      const next = [...draft.blocks]
      next.splice(index, 0, block)
      editable.onChange({ ...draft, blocks: next })
      setSelected(block.id)
    },
    [draft, editable],
  )

  const [selectedId, setSelected] = useState<string | null>(null)
  const [addMenuIndex, setAddMenuIndex] = useState<number | null>(null)

  // Click outside any block deselects.
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!editMode) return
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) setSelected(null)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [editMode])

  const docType = bgDocumentTypeById(draft.documentTypeId)

  return (
    <div
      id={documentId}
      ref={rootRef}
      className={`offer-doc flex flex-col gap-6 rounded-[var(--inkblot-radius-2xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-5 sm:p-7 md:p-9 shadow-[var(--inkblot-shadow-md)] ${className}`}
    >
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]">
            {docType?.label ?? 'Оферта'}
            {docType?.legal ? <span className="ml-2 text-citrus-lemon">· ЗДДС</span> : null}
          </p>
          {editMode ? (
            <EditableText
              as="p"
              value={draft.documentNumber}
              onCommit={(v) => patchDraft({ documentNumber: v })}
              placeholder="№"
              className="mt-1 font-mono text-xs text-citrus-lemon break-all"
            />
          ) : draft.documentNumber ? (
            <p className="mt-1 font-mono text-xs text-citrus-lemon break-all">{draft.documentNumber}</p>
          ) : null}
          <EditableHeading
            value={draft.projectName}
            editable={editMode}
            onCommit={(v) => patchDraft({ projectName: v })}
            placeholder="Име на проекта"
            className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-foreground break-words"
          />
        </div>

        <dl className="grid min-w-0 grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:min-w-[240px] sm:max-w-[55%] sm:justify-self-end">
          <dt className="uppercase tracking-wider">Клиент</dt>
          <dd>
            <EditableText
              value={draft.clientName}
              editable={editMode}
              onCommit={(v) => patchDraft({ clientName: v })}
              placeholder="Име на клиента"
              className="font-medium text-foreground break-words"
            />
          </dd>
          {editMode || (draft.clientOrg && draft.clientOrg !== draft.clientName) ? (
            <>
              <dt className="uppercase tracking-wider">Орг.</dt>
              <dd>
                <EditableText
                  value={draft.clientOrg}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ clientOrg: v })}
                  placeholder="—"
                  className="break-words"
                />
              </dd>
            </>
          ) : null}
          {editMode || draft.clientEmail ? (
            <>
              <dt className="uppercase tracking-wider">Имейл</dt>
              <dd>
                <EditableText
                  value={draft.clientEmail}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ clientEmail: v })}
                  placeholder="—"
                  className="break-all"
                />
              </dd>
            </>
          ) : null}
          <dt className="uppercase tracking-wider">Издадена</dt>
          <dd>
            <EditableDate
              value={draft.issueDate}
              editable={editMode}
              onCommit={(v) => patchDraft({ issueDate: v || undefined })}
            />
          </dd>
          <dt className="uppercase tracking-wider">Валидна до</dt>
          <dd>
            <EditableDate
              value={draft.validUntil}
              editable={editMode}
              onCommit={(v) => patchDraft({ validUntil: v || undefined })}
            />
          </dd>
        </dl>
      </header>

      {/* Blocks */}
      <div className="flex flex-col gap-2">
        {editMode ? (
          <AddBlockGap
            open={addMenuIndex === 0}
            onOpen={(open) => setAddMenuIndex(open ? 0 : null)}
            onPick={(kind) => {
              insertBlockAt(0, kind)
              setAddMenuIndex(null)
            }}
          />
        ) : null}

        {draft.blocks.map((block, idx) => (
          <div key={block.id}>
            <BlockFrame
              block={block}
              editMode={editMode}
              isFirst={idx === 0}
              isLast={idx === draft.blocks.length - 1}
              isSelected={selectedId === block.id}
              onSelect={() => setSelected(block.id)}
              onMoveUp={() => moveBlock(block.id, -1)}
              onMoveDown={() => moveBlock(block.id, 1)}
              onDuplicate={() => duplicateBlock(block.id)}
              onDelete={() => deleteBlock(block.id)}
            >
              <BlockBody block={block} editMode={editMode} onPatch={patchBlock} />
            </BlockFrame>

            {editMode ? (
              <AddBlockGap
                open={addMenuIndex === idx + 1}
                onOpen={(open) => setAddMenuIndex(open ? idx + 1 : null)}
                onPick={(kind) => {
                  insertBlockAt(idx + 1, kind)
                  setAddMenuIndex(null)
                }}
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Brand footer */}
      <footer className="flex flex-col gap-1 border-t border-[var(--inkblot-semantic-color-border-default)] pt-4 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:flex-row sm:items-center sm:justify-between">
        <EditableText
          value={draft.brandName}
          editable={editMode}
          onCommit={(v) => patchDraft({ brandName: v })}
          placeholder="Бранд"
          className="font-semibold tracking-wide text-foreground"
        />
        <EditableText
          value={draft.brandTagline}
          editable={editMode}
          onCommit={(v) => patchDraft({ brandTagline: v })}
          placeholder="Слоган"
          className="truncate"
        />
        <EditableText
          value={draft.brandUrl}
          editable={editMode}
          onCommit={(v) => patchDraft({ brandUrl: v })}
          placeholder="url"
          className="font-mono text-citrus-lemon"
        />
      </footer>
    </div>
  )
}

/* ─── Block frame (selection chrome) ─────────────────────────────────────── */

interface BlockFrameProps {
  block: OfferBlock
  editMode: boolean
  isFirst: boolean
  isLast: boolean
  isSelected: boolean
  onSelect: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onDuplicate: () => void
  onDelete: () => void
  children: ReactNode
}

function BlockFrame({
  block,
  editMode,
  isFirst,
  isLast,
  isSelected,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  children,
}: BlockFrameProps) {
  if (!editMode) return <>{children}</>

  return (
    <div
      data-block-id={block.id}
      data-selected={isSelected || undefined}
      onMouseDown={(e) => {
        if ((e.target as HTMLElement).closest('[data-block-toolbar]')) return
        onSelect()
      }}
      className="group relative rounded-[var(--inkblot-radius-lg)] transition-colors data-[selected]:ring-2 data-[selected]:ring-accent/40"
    >
      <div
        data-block-toolbar
        className="pointer-events-none absolute -top-3 right-2 z-10 flex items-center gap-0.5 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-0.5 opacity-0 shadow-[var(--inkblot-shadow-sm)] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 data-[selected]:opacity-100"
      >
        <BlockToolbarBtn label="Move up" disabled={isFirst} onClick={onMoveUp}>
          <ArrowUp className="h-3.5 w-3.5" aria-hidden />
        </BlockToolbarBtn>
        <BlockToolbarBtn label="Move down" disabled={isLast} onClick={onMoveDown}>
          <ArrowDown className="h-3.5 w-3.5" aria-hidden />
        </BlockToolbarBtn>
        <BlockToolbarBtn label="Duplicate" onClick={onDuplicate}>
          <Copy className="h-3.5 w-3.5" aria-hidden />
        </BlockToolbarBtn>
        <BlockToolbarBtn label="Delete" onClick={onDelete} destructive>
          <Trash2 className="h-3.5 w-3.5" aria-hidden />
        </BlockToolbarBtn>
      </div>
      {children}
    </div>
  )
}

function BlockToolbarBtn({
  label,
  onClick,
  children,
  disabled,
  destructive,
}: {
  label: string
  onClick: () => void
  children: ReactNode
  disabled?: boolean
  destructive?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={`pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-background/70 disabled:opacity-40 disabled:hover:bg-transparent ${
        destructive ? 'hover:text-destructive' : 'hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}

/* ─── Add-block gap + menu ───────────────────────────────────────────────── */

const ADD_BLOCK_KINDS: OfferBlockKind[] = [
  'paragraph',
  'heading',
  'feature',
  'bullets',
  'pricing',
  'plans',
  'quote',
  'divider',
]

function AddBlockGap({
  open,
  onOpen,
  onPick,
}: {
  open: boolean
  onOpen: (open: boolean) => void
  onPick: (kind: OfferBlockKind) => void
}) {
  return (
    <div
      className={`group relative flex items-center justify-center transition-all ${
        open ? 'my-2' : 'my-0.5 h-4 hover:my-2'
      }`}
    >
      <button
        type="button"
        onClick={() => onOpen(!open)}
        aria-expanded={open}
        className={`inline-flex h-5 items-center gap-1 rounded-full border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 text-[10px] font-medium text-muted-foreground transition-opacity hover:text-foreground ${
          open ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <Plus className="h-3 w-3" aria-hidden /> Добави блок
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute top-6 z-20 grid w-[240px] grid-cols-2 gap-1 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-1 shadow-[var(--inkblot-shadow-md)]"
        >
          {ADD_BLOCK_KINDS.map((k) => (
            <button
              key={k}
              type="button"
              role="menuitem"
              onClick={() => onPick(k)}
              className="flex items-center gap-2 rounded px-2 py-1.5 text-left text-[11px] text-foreground hover:bg-background/70"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-accent/15 font-mono text-[10px] text-citrus-lemon">
                {BLOCK_GLYPH[k]}
              </span>
              {BLOCK_KIND_LABEL[k]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onOpen(false)}
            aria-label="Close"
            className="col-span-2 mt-0.5 inline-flex items-center justify-center gap-1 rounded px-2 py-1 text-[10px] text-muted-foreground hover:bg-background/70"
          >
            <X className="h-3 w-3" aria-hidden /> Затвори
          </button>
        </div>
      ) : null}
    </div>
  )
}

const BLOCK_GLYPH: Record<OfferBlockKind, string> = {
  heading: 'H',
  paragraph: '¶',
  feature: '★',
  bullets: '•',
  quote: '❝',
  pricing: '€',
  plans: '◫',
  divider: '—',
}

/* ─── Block body renderer (dispatches by kind) ───────────────────────────── */

function BlockBody({
  block,
  editMode,
  onPatch,
}: {
  block: OfferBlock
  editMode: boolean
  onPatch: <B extends OfferBlock>(id: string, updater: (b: B) => B) => void
}) {
  switch (block.kind) {
    case 'heading':
      return <HeadingBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'paragraph':
      return <ParagraphBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'feature':
      return <FeatureBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'bullets':
      return <BulletsBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'quote':
      return (
        <blockquote className="rounded-[var(--inkblot-radius-lg)] border-l-2 border-accent bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-3">
          <EditableText
            value={block.text}
            editable={editMode}
            onCommit={(v) => onPatch(block.id, (b) => ({ ...b, text: v }))}
            placeholder="Цитат от клиент или стойностно твърдение…"
            multiline
            className="text-sm italic leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]"
          />
          <EditableText
            value={block.cite}
            editable={editMode}
            onCommit={(v) => onPatch(block.id, (b) => ({ ...b, cite: v }))}
            placeholder="— източник"
            className="mt-2 block text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]"
          />
        </blockquote>
      )
    case 'pricing':
      return <PricingBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'plans':
      return <PlansBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'divider':
      return <hr className="my-2 border-t border-[var(--inkblot-semantic-color-border-default)]" />
  }
}

/* ─── Block bodies ───────────────────────────────────────────────────────── */

type BlockPatch = <B extends OfferBlock>(id: string, updater: (b: B) => B) => void

function HeadingBody({ block, editMode, onPatch }: { block: HeadingBlock; editMode: boolean; onPatch: BlockPatch }) {
  const size =
    block.level === 1
      ? 'text-2xl sm:text-3xl font-semibold tracking-tight'
      : block.level === 2
      ? 'text-lg sm:text-xl font-semibold'
      : 'text-sm font-semibold uppercase tracking-wider'
  return (
    <div className="flex items-start gap-2">
      <EditableHeading
        value={block.text}
        editable={editMode}
        onCommit={(v) => onPatch<HeadingBlock>(block.id, (b) => ({ ...b, text: v }))}
        placeholder={`Заглавие H${block.level}`}
        className={`${size} text-foreground break-words flex-1`}
      />
      {editMode ? (
        <select
          value={block.level}
          onChange={(e) =>
            onPatch<HeadingBlock>(block.id, (b) => ({
              ...b,
              level: Number(e.target.value) === 1 ? 1 : Number(e.target.value) === 3 ? 3 : 2,
            }))
          }
          className="mt-1 shrink-0 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 text-[10px] text-muted-foreground"
          title="Heading level"
          aria-label="Heading level"
        >
          <option value={1}>H1</option>
          <option value={2}>H2</option>
          <option value={3}>H3</option>
        </select>
      ) : null}
    </div>
  )
}

function ParagraphBody({
  block,
  editMode,
  onPatch,
}: {
  block: ParagraphBlock
  editMode: boolean
  onPatch: BlockPatch
}) {
  return (
    <EditableText
      value={block.text}
      editable={editMode}
      onCommit={(v) => onPatch<ParagraphBlock>(block.id, (b) => ({ ...b, text: v }))}
      placeholder="Напиши параграф…"
      multiline
      className="text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)] sm:text-base"
    />
  )
}

function FeatureBody({ block, editMode, onPatch }: { block: FeatureBlock; editMode: boolean; onPatch: BlockPatch }) {
  return (
    <article className="grid grid-cols-1 gap-4 rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 md:grid-cols-[1fr_minmax(0,0.9fr)] md:gap-5">
      <div className="min-w-0 flex flex-col gap-2">
        <EditableText
          value={block.kicker}
          editable={editMode}
          onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, kicker: v }))}
          placeholder="Подзаглавие (по желание)"
          className="text-[10px] uppercase tracking-[0.16em] text-[var(--inkblot-semantic-color-text-tertiary)]"
        />
        <EditableHeading
          value={block.title}
          editable={editMode}
          onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, title: v }))}
          placeholder="Име на функционалност"
          className="text-base font-semibold text-foreground sm:text-lg leading-snug"
        />
        <EditableText
          value={block.description}
          editable={editMode}
          onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, description: v }))}
          placeholder="Описание…"
          multiline
          className="text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]"
        />
        <BulletsList
          items={block.bullets}
          editMode={editMode}
          onChange={(items) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, bullets: items }))}
          placeholder="Булет"
        />
      </div>

      {editMode || block.comparisonNote ? (
        <aside className="rounded-[var(--inkblot-radius-lg)] border border-accent/20 bg-accent/5 p-3 text-xs leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)] md:max-w-full">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-citrus-lemon">
            Конкурентно предимство
          </p>
          <EditableText
            value={block.comparisonNote}
            editable={editMode}
            onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, comparisonNote: v }))}
            placeholder="Как това ни отличава от конкуренцията…"
            multiline
          />
        </aside>
      ) : null}
    </article>
  )
}

function BulletsBody({
  block,
  editMode,
  onPatch,
}: {
  block: { id: string; kind: 'bullets'; items: string[] }
  editMode: boolean
  onPatch: BlockPatch
}) {
  return (
    <BulletsList
      items={block.items}
      editMode={editMode}
      onChange={(items) =>
        onPatch<{ id: string; kind: 'bullets'; items: string[] } & OfferBlock>(block.id, (b) => ({
          ...b,
          items,
        }))
      }
      placeholder="Елемент от списъка"
    />
  )
}

function PricingBody({ block, editMode, onPatch }: { block: PricingBlock; editMode: boolean; onPatch: BlockPatch }) {
  const marketRange = formatMoneyRange(block.marketValueFrom, block.marketValueTo, block.currency)
  const vatAmount = offerVatAmount(block)
  const total = offerGrandTotal(block)
  const patchP = (u: (b: PricingBlock) => PricingBlock) => onPatch<PricingBlock>(block.id, u)

  return (
    <section className="grid grid-cols-1 gap-4 rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 md:grid-cols-[1fr_auto]">
      <div className="flex flex-col gap-2 min-w-0 text-sm">
        {editMode ? (
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">
              Пазарна стойност
            </span>
            <InlineNumber
              value={block.marketValueFrom}
              onCommit={(v) => patchP((b) => ({ ...b, marketValueFrom: v }))}
              placeholder="от"
            />
            <span className="text-muted-foreground">–</span>
            <InlineNumber
              value={block.marketValueTo}
              onCommit={(v) => patchP((b) => ({ ...b, marketValueTo: v }))}
              placeholder="до"
            />
            <span className="text-[10px] text-muted-foreground">{block.currency}</span>
          </div>
        ) : marketRange ? (
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">
              Пазарна стойност
            </span>
            <span className="font-mono text-sm text-[var(--inkblot-semantic-color-text-secondary)]">
              {marketRange}
            </span>
          </div>
        ) : null}

        <PricingRow
          label="Срок за изпълнение"
          value={block.timeline}
          editMode={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, timeline: v }))}
          placeholder="напр. 1.5 месеца"
        />
        <PricingRow
          label="Гаранция"
          value={block.guarantee}
          editMode={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, guarantee: v }))}
          placeholder="напр. SEO и техническа поддръжка"
        />

        {editMode || block.note ? (
          <EditableText
            value={block.note}
            editable={editMode}
            onCommit={(v) => patchP((b) => ({ ...b, note: v }))}
            placeholder="Пояснение / сравнение с пазара…"
            multiline
            className="mt-2 text-xs leading-relaxed text-[var(--inkblot-semantic-color-text-tertiary)]"
          />
        ) : null}
      </div>

      <div className="flex flex-col items-start gap-1 rounded-[var(--inkblot-radius-lg)] border border-accent/25 bg-accent/10 p-4 md:items-end md:min-w-[180px]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">
          Предложена цена
        </span>

        {editMode ? (
          <div className="flex items-baseline gap-1.5">
            <select
              value={block.currency}
              onChange={(e) => patchP((b) => ({ ...b, currency: e.target.value as OfferCurrency }))}
              aria-label="Currency"
              className="rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1 py-0.5 text-[10px] text-muted-foreground"
            >
              <option value="EUR">EUR</option>
              <option value="BGN">BGN</option>
              <option value="USD">USD</option>
            </select>
            <InlineNumber
              value={block.price}
              onCommit={(v) => patchP((b) => ({ ...b, price: v ?? 0 }))}
              placeholder="0"
              className="font-mono text-2xl font-semibold text-foreground tabular-nums min-w-[5ch]"
              allowZero
            />
          </div>
        ) : (
          <span className="font-mono text-2xl font-semibold text-foreground tabular-nums">
            {formatMoney(block.price, block.currency)}
          </span>
        )}

        {editMode ? (
          <div className="flex items-baseline gap-1 text-[11px] text-muted-foreground">
            <span>+</span>
            <InlineNumber
              value={block.vatPct}
              onCommit={(v) => patchP((b) => ({ ...b, vatPct: Math.max(0, Math.min(100, v ?? 0)) }))}
              placeholder="0"
              allowZero
            />
            <span>% VAT</span>
          </div>
        ) : block.vatPct > 0 ? (
          <span className="text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]">
            + {block.vatPct}% VAT ({formatMoney(vatAmount, block.currency)})
          </span>
        ) : (
          <span className="text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]">без VAT</span>
        )}

        {block.vatPct > 0 ? (
          <span className="mt-1 text-[11px] font-medium text-citrus-lemon">
            Общо: {formatMoney(total, block.currency)}
          </span>
        ) : null}
      </div>
    </section>
  )
}

function PricingRow({
  label,
  value,
  editMode,
  onCommit,
  placeholder,
}: {
  label: string
  value: string
  editMode: boolean
  onCommit: (v: string) => void
  placeholder?: string
}) {
  if (!editMode && !value) return null
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className="text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">
        {label}
      </span>
      <EditableText
        value={value}
        editable={editMode}
        onCommit={onCommit}
        placeholder={placeholder}
        className="text-sm text-foreground"
      />
    </div>
  )
}

function PlansBody({ block, editMode, onPatch }: { block: PlansBlock; editMode: boolean; onPatch: BlockPatch }) {
  const patchP = (u: (b: PlansBlock) => PlansBlock) => onPatch<PlansBlock>(block.id, u)
  const updatePlan = (id: string, p: Partial<OfferSupportPlan>) =>
    patchP((b) => ({ ...b, plans: b.plans.map((pl) => (pl.id === id ? { ...pl, ...p } : pl)) }))
  const removePlan = (id: string) => patchP((b) => ({ ...b, plans: b.plans.filter((pl) => pl.id !== id) }))
  const addPlan = () => patchP((b) => ({ ...b, plans: [...b.plans, newSupportPlan()] }))

  return (
    <section className="flex flex-col gap-2">
      <EditableText
        value={block.title}
        editable={editMode}
        onCommit={(v) => patchP((b) => ({ ...b, title: v }))}
        placeholder="Заглавие на секцията"
        className="text-[10px] uppercase tracking-[0.14em] text-[var(--inkblot-semantic-color-text-tertiary)]"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {block.plans.map((p) => (
          <div
            key={p.id}
            className="group/plan relative flex flex-col gap-1 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3"
          >
            <EditableText
              value={p.title}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { title: v })}
              placeholder="Заглавие"
              className="text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]"
            />
            <EditableText
              value={p.subtitle ?? ''}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { subtitle: v })}
              placeholder="Подзаглавие"
              className="text-xs text-[var(--inkblot-semantic-color-text-secondary)]"
            />
            <EditableText
              value={p.priceLabel}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { priceLabel: v })}
              placeholder="Цена"
              className="font-mono text-sm font-medium text-foreground mt-1"
            />
            {editMode ? (
              <button
                type="button"
                onClick={() => removePlan(p.id)}
                aria-label="Remove plan"
                className="absolute top-1.5 right-1.5 inline-flex h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover/plan:opacity-100"
              >
                <Trash2 className="h-3 w-3" aria-hidden />
              </button>
            ) : null}
          </div>
        ))}
        {editMode ? (
          <button
            type="button"
            onClick={addPlan}
            className="inline-flex min-h-[68px] items-center justify-center gap-1.5 rounded-[var(--inkblot-radius-lg)] border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden /> Добави план
          </button>
        ) : null}
      </div>
    </section>
  )
}

/* ─── Shared list editor ─────────────────────────────────────────────────── */

function BulletsList({
  items,
  editMode,
  onChange,
  placeholder,
}: {
  items: string[]
  editMode: boolean
  onChange: (items: string[]) => void
  placeholder?: string
}) {
  const patch = (i: number, v: string) => onChange(items.map((it, idx) => (idx === i ? v : it)))
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i))
  const add = () => onChange([...items, ''])

  if (!editMode && items.every((it) => !it)) return null

  return (
    <ul className="mt-1 flex flex-col gap-1">
      {items.map((it, i) => (
        <li key={i} className="relative flex items-start gap-2 pl-4 text-xs text-[var(--inkblot-semantic-color-text-secondary)] sm:text-sm">
          <span aria-hidden className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-accent" />
          <EditableText
            value={it}
            editable={editMode}
            onCommit={(v) => patch(i, v)}
            placeholder={placeholder ?? 'Булет'}
            className="flex-1"
          />
          {editMode ? (
            <button
              type="button"
              onClick={() => remove(i)}
              aria-label="Remove bullet"
              className="shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
            >
              <Trash2 className="h-3 w-3" aria-hidden />
            </button>
          ) : null}
        </li>
      ))}
      {editMode ? (
        <li>
          <button
            type="button"
            onClick={add}
            className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-3 w-3" aria-hidden /> Добави булет
          </button>
        </li>
      ) : null}
    </ul>
  )
}

/* ─── Editable primitives ────────────────────────────────────────────────── */

interface EditableTextProps {
  value: string
  onCommit: (v: string) => void
  editable?: boolean
  placeholder?: string
  multiline?: boolean
  className?: string
  as?: 'span' | 'p' | 'div'
  style?: CSSProperties
}

/**
 * EditableText — a contentEditable primitive that stays out of React's way.
 * The DOM is the source of truth while editing; we only commit on blur.
 * Using `useLayoutEffect` to sync text when the external `value` changes
 * (without overwriting during an active edit).
 */
function EditableText({
  value,
  onCommit,
  editable = true,
  placeholder,
  multiline,
  className = '',
  as = 'span',
  style,
}: EditableTextProps) {
  const ref = useRef<HTMLElement | null>(null)
  const focusedRef = useRef(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (focusedRef.current) return
    if (el.textContent !== value) el.textContent = value
  }, [value])

  if (!editable) {
    if (!value) return null
    const Tag = as
    return (
      <Tag className={className} style={style}>
        {value}
      </Tag>
    )
  }

  const Tag = as
  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node
        if (node && node.textContent !== value) node.textContent = value
      }}
      className={`offer-editable ${className}`.trim()}
      data-placeholder={placeholder ?? ''}
      data-multiline={multiline || undefined}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      onFocus={() => {
        focusedRef.current = true
      }}
      onBlur={(e) => {
        focusedRef.current = false
        const text = (e.currentTarget.textContent ?? '').replace(/\r/g, '')
        if (text !== value) onCommit(text)
      }}
      onKeyDown={(e) => {
        if (!multiline && e.key === 'Enter') {
          e.preventDefault()
          ;(e.currentTarget as HTMLElement).blur()
        }
        if (e.key === 'Escape') {
          ;(e.currentTarget as HTMLElement).blur()
        }
      }}
      style={style}
    />
  )
}

function EditableHeading(props: Omit<EditableTextProps, 'as' | 'multiline'>) {
  return <EditableText {...props} as="div" />
}

function EditableDate({
  value,
  editable,
  onCommit,
}: {
  value: string | undefined
  editable: boolean
  onCommit: (v: string) => void
}) {
  if (!editable) return <span>{value || '—'}</span>
  return (
    <input
      type="date"
      value={value ?? ''}
      onChange={(e) => onCommit(e.target.value)}
      className="rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 text-[11px] text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"
    />
  )
}

function InlineNumber({
  value,
  onCommit,
  placeholder,
  className,
  allowZero,
}: {
  value: number | undefined
  onCommit: (v: number | undefined) => void
  placeholder?: string
  className?: string
  allowZero?: boolean
}) {
  const [draft, setDraft] = useState<string>(value == null ? '' : String(value))

  useEffect(() => {
    setDraft(value == null ? '' : String(value))
  }, [value])

  return (
    <input
      type="number"
      inputMode="decimal"
      min={0}
      step="any"
      value={draft}
      placeholder={placeholder}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        if (draft === '') {
          onCommit(undefined)
          return
        }
        const n = Number(draft)
        if (!Number.isFinite(n) || n < 0) {
          setDraft(value == null ? '' : String(value))
          return
        }
        if (!allowZero && n === 0) {
          onCommit(undefined)
          return
        }
        onCommit(n)
      }}
      className={`rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 font-mono text-sm tabular-nums text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] w-[6ch] ${
        className ?? ''
      }`}
    />
  )
}
