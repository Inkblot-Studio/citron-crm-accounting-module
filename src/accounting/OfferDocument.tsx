/**
 * OfferDocument — the single renderer for offers.
 *
 * Pass `editable` for a WYSIWYG canvas; omit it for a read-only preview
 * (used by the PDF/print portal in OfferBuilder and by list thumbnails).
 *
 * ─── Design notes ──────────────────────────────────────────────────────
 *
 * Layout is intentionally editorial rather than dashboard-ish: features are
 * numbered like magazine chapters, sections use small-caps labels with a
 * top hairline rule, pricing is a label/value ledger with a tabular total
 * aligned to the right, plans are a three-column ledger divided by vertical
 * hairlines. No block has a tinted card background — hierarchy comes from
 * typography, spacing, and hairline rules alone.
 *
 * ─── Interaction ───────────────────────────────────────────────────────
 *
 * Controls (block toolbar, bullet/plan remove buttons, add menus) only
 * appear when a block is *selected* (clicked). Nothing reveals on hover.
 * Click outside any block, or press Escape, to deselect.
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { ArrowDown, ArrowUp, Copy, Plus, Trash2, X } from 'lucide-react'
import { bgDocumentTypeById } from './accountingConstants'
import { resolveBrandingLogoSrc, type BrandingProfile } from './brandingProfile.types'
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
  /** Applies colors, logo and footer identity. Optional for isolated previews. */
  brand?: BrandingProfile
  documentId?: string
  className?: string
  /** Omit for read-only rendering. */
  editable?: {
    onChange: (draft: OfferDraft) => void
  }
}

export default function OfferDocument({
  draft,
  brand,
  documentId = 'offer-document',
  className = '',
  editable,
}: OfferDocumentProps) {
  const editMode = editable != null

  // Brand identity, with per-draft override taking precedence (so a user can
  // tweak the footer on a specific offer without editing the profile itself).
  const brandName = draft.brandName || brand?.brandName || ''
  const brandTagline = draft.brandTagline || brand?.brandTagline || ''
  const brandUrl = draft.brandUrl || brand?.brandWebsite || ''
  const logoSrc = resolveBrandingLogoSrc(brand)

  // Local CSS variable override: citrus-lemon is used throughout the offer as
  // the accent token; swapping it here retints document number, section
  // markers, and comparison labels without touching individual utility classes.
  const brandStyle: CSSProperties | undefined = brand
    ? ({
        ['--inkblot-semantic-color-status-warning' as never]: brand.accentColor,
      } as CSSProperties)
    : undefined

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

  const [selectedId, setSelected] = useState<string | null>(null)
  const [addMenuForId, setAddMenuForId] = useState<string | null>(null)

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
      setSelected(null)
    },
    [draft, editable],
  )

  const insertAfter = useCallback(
    (afterId: string, kind: OfferBlockKind) => {
      if (!editable) return
      const i = draft.blocks.findIndex((b) => b.id === afterId)
      const block = createBlock(kind)
      const next = [...draft.blocks]
      next.splice(i + 1, 0, block)
      editable.onChange({ ...draft, blocks: next })
      setSelected(block.id)
      setAddMenuForId(null)
    },
    [draft, editable],
  )

  // Click outside any block deselects; Escape deselects too.
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!editMode) return
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return
      const t = e.target as Node
      if (rootRef.current.contains(t)) return
      setSelected(null)
      setAddMenuForId(null)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelected(null)
        setAddMenuForId(null)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [editMode])

  const docType = bgDocumentTypeById(draft.documentTypeId)

  return (
    <div
      id={documentId}
      ref={rootRef}
      style={brandStyle}
      className={`offer-doc relative mx-auto max-w-[720px] bg-[var(--inkblot-semantic-color-background-primary)] text-foreground shadow-[var(--inkblot-shadow-sm)] [font-feature-settings:'ss01','cv11'] ${className}`}
    >
      <div className="flex flex-col gap-10 px-8 py-10 sm:gap-12 sm:px-12 sm:py-14 md:px-16 md:py-16">
        {/* ───────────── Masthead ───────────── */}
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div className="min-w-0">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={brandName || 'Brand logo'}
                  className="mb-3 block h-10 w-auto max-w-[140px] object-contain"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />
              ) : null}
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]">
                {docType?.label ?? 'Offer'}
                {docType?.legal ? <span className="ml-2 text-citrus-lemon">· ЗДДС</span> : null}
              </p>
              <div className="mt-2">
                <EditableText
                  as="span"
                  value={draft.documentNumber}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ documentNumber: v })}
                  placeholder="№"
                  className="font-mono text-[13px] text-citrus-lemon"
                />
              </div>
            </div>

            <dl className="grid min-w-0 grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 text-[11px] sm:max-w-[58%] sm:justify-self-end">
              <MetaLabel>Client</MetaLabel>
              <MetaValue>
                <EditableText
                  value={draft.clientName}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ clientName: v })}
                  placeholder="Client name"
                  className="font-medium text-foreground"
                />
              </MetaValue>

              {editMode || (draft.clientOrg && draft.clientOrg !== draft.clientName) ? (
                <>
                  <MetaLabel>Organisation</MetaLabel>
                  <MetaValue>
                    <EditableText
                      value={draft.clientOrg}
                      editable={editMode}
                      onCommit={(v) => patchDraft({ clientOrg: v })}
                      placeholder="—"
                      className="text-[var(--inkblot-semantic-color-text-secondary)]"
                    />
                  </MetaValue>
                </>
              ) : null}

              {editMode || draft.clientEmail ? (
                <>
                  <MetaLabel>Email</MetaLabel>
                  <MetaValue>
                    <EditableText
                      value={draft.clientEmail}
                      editable={editMode}
                      onCommit={(v) => patchDraft({ clientEmail: v })}
                      placeholder="—"
                      className="break-all text-[var(--inkblot-semantic-color-text-secondary)]"
                    />
                  </MetaValue>
                </>
              ) : null}

              <MetaLabel>Issued</MetaLabel>
              <MetaValue>
                <EditableDate
                  value={draft.issueDate}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ issueDate: v || undefined })}
                />
              </MetaValue>

              <MetaLabel>Valid until</MetaLabel>
              <MetaValue>
                <EditableDate
                  value={draft.validUntil}
                  editable={editMode}
                  onCommit={(v) => patchDraft({ validUntil: v || undefined })}
                />
              </MetaValue>
            </dl>
          </div>

          <EditableHeading
            value={draft.projectName}
            editable={editMode}
            onCommit={(v) => patchDraft({ projectName: v })}
            placeholder="Project name"
            className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.75rem]"
          />

          <div className="h-px w-16 bg-foreground" aria-hidden />
        </header>

        {/* ───────────── Blocks ───────────── */}
        <div className="flex flex-col gap-10 sm:gap-12">
          {draft.blocks.map((block, idx) => {
            const featureIdx = draft.blocks
              .slice(0, idx + 1)
              .filter((b) => b.kind === 'feature').length
            return (
              <BlockFrame
                key={block.id}
                block={block}
                editMode={editMode}
                isFirst={idx === 0}
                isLast={idx === draft.blocks.length - 1}
                isSelected={selectedId === block.id}
                isAddMenuOpen={addMenuForId === block.id}
                onSelect={() => setSelected(block.id)}
                onMoveUp={() => moveBlock(block.id, -1)}
                onMoveDown={() => moveBlock(block.id, 1)}
                onDuplicate={() => duplicateBlock(block.id)}
                onDelete={() => deleteBlock(block.id)}
                onToggleAddMenu={() => setAddMenuForId((cur) => (cur === block.id ? null : block.id))}
                onCloseAddMenu={() => setAddMenuForId(null)}
                onPickAdd={(k) => insertAfter(block.id, k)}
              >
                <BlockBody
                  block={block}
                  editMode={editMode}
                  isSelected={selectedId === block.id}
                  featureNumber={block.kind === 'feature' ? featureIdx : 0}
                  onPatch={patchBlock}
                />
              </BlockFrame>
            )
          })}
        </div>

        {/* ───────────── Footer ───────────── */}
        <footer className="grid grid-cols-1 items-baseline gap-2 border-t border-border pt-5 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:grid-cols-[auto_1fr_auto] sm:gap-6">
          {editMode ? (
            <EditableText
              value={draft.brandName}
              editable
              onCommit={(v) => patchDraft({ brandName: v })}
              placeholder={brand?.brandName || 'Brand'}
              className="font-semibold uppercase tracking-[0.18em] text-foreground"
            />
          ) : brandName ? (
            <span className="font-semibold uppercase tracking-[0.18em] text-foreground">
              {brandName}
            </span>
          ) : null}
          {editMode ? (
            <EditableText
              value={draft.brandTagline}
              editable
              onCommit={(v) => patchDraft({ brandTagline: v })}
              placeholder={brand?.brandTagline || 'Tagline'}
              className="truncate"
            />
          ) : brandTagline ? (
            <span className="truncate">{brandTagline}</span>
          ) : null}
          {editMode ? (
            <EditableText
              value={draft.brandUrl}
              editable
              onCommit={(v) => patchDraft({ brandUrl: v })}
              placeholder={brand?.brandWebsite || 'url'}
              className="font-mono text-citrus-lemon"
            />
          ) : brandUrl ? (
            <span className="font-mono text-citrus-lemon">{brandUrl}</span>
          ) : null}
        </footer>
      </div>
    </div>
  )
}

/* ─── Block frame + toolbar ──────────────────────────────────────────────── */

interface BlockFrameProps {
  block: OfferBlock
  editMode: boolean
  isFirst: boolean
  isLast: boolean
  isSelected: boolean
  isAddMenuOpen: boolean
  onSelect: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onDuplicate: () => void
  onDelete: () => void
  onToggleAddMenu: () => void
  onCloseAddMenu: () => void
  onPickAdd: (kind: OfferBlockKind) => void
  children: ReactNode
}

function BlockFrame({
  editMode,
  isFirst,
  isLast,
  isSelected,
  isAddMenuOpen,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onToggleAddMenu,
  onCloseAddMenu,
  onPickAdd,
  children,
}: BlockFrameProps) {
  if (!editMode) return <>{children}</>

  return (
    <section
      data-selected={isSelected || undefined}
      onMouseDown={(e) => {
        if ((e.target as HTMLElement).closest('[data-block-toolbar]')) return
        onSelect()
      }}
      className="group/blk relative -mx-4 rounded-md px-4 py-1 transition-colors data-[selected]:bg-[var(--inkblot-semantic-color-background-secondary)]"
    >
      {isSelected ? (
        <div
          data-block-toolbar
          className="absolute right-4 -top-4 z-10 flex items-center gap-0.5 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-0.5 shadow-[var(--inkblot-shadow-sm)]"
        >
          <ToolbarBtn label="Move up" disabled={isFirst} onClick={onMoveUp}>
            <ArrowUp className="h-4 w-4" aria-hidden />
          </ToolbarBtn>
          <ToolbarBtn label="Move down" disabled={isLast} onClick={onMoveDown}>
            <ArrowDown className="h-4 w-4" aria-hidden />
          </ToolbarBtn>
          <ToolbarBtn label="Add below" onClick={onToggleAddMenu} active={isAddMenuOpen}>
            <Plus className="h-4 w-4" aria-hidden />
          </ToolbarBtn>
          <ToolbarBtn label="Duplicate" onClick={onDuplicate}>
            <Copy className="h-4 w-4" aria-hidden />
          </ToolbarBtn>
          <ToolbarBtn label="Delete" onClick={onDelete} destructive>
            <Trash2 className="h-4 w-4" aria-hidden />
          </ToolbarBtn>
        </div>
      ) : null}

      {isSelected && isAddMenuOpen ? <AddBlockMenu onPick={onPickAdd} onClose={onCloseAddMenu} /> : null}

      {children}
    </section>
  )
}

function ToolbarBtn({
  label,
  onClick,
  children,
  disabled,
  destructive,
  active,
}: {
  label: string
  onClick: () => void
  children: ReactNode
  disabled?: boolean
  destructive?: boolean
  active?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-7 w-7 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-background/80 disabled:opacity-40 disabled:hover:bg-transparent ${
        destructive ? 'hover:text-destructive' : 'hover:text-foreground'
      } ${active ? 'bg-background text-foreground' : ''}`}
    >
      {children}
    </button>
  )
}

/* ─── Add-block menu (anchored below toolbar) ────────────────────────────── */

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

function AddBlockMenu({ onPick, onClose }: { onPick: (k: OfferBlockKind) => void; onClose: () => void }) {
  return (
    <div
      role="menu"
      aria-label="Block type"
      className="absolute right-4 top-6 z-20 grid w-[min(320px,calc(100vw-3rem))] grid-cols-2 gap-1 rounded-lg border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-1.5 shadow-[var(--inkblot-shadow-md)]"
      onMouseDown={(e) => e.stopPropagation()}
    >
      {ADD_BLOCK_KINDS.map((k) => (
        <button
          key={k}
          type="button"
          role="menuitem"
          onClick={() => onPick(k)}
          className="flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs text-foreground transition-colors hover:bg-[var(--inkblot-semantic-color-background-secondary)]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--inkblot-semantic-color-background-secondary)] font-mono text-[11px] text-citrus-lemon">
            {BLOCK_GLYPH[k]}
          </span>
          {BLOCK_KIND_LABEL[k]}
        </button>
      ))}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="col-span-2 mt-1 inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] text-muted-foreground hover:bg-[var(--inkblot-semantic-color-background-secondary)]"
      >
        <X className="h-3.5 w-3.5" aria-hidden /> Close
      </button>
    </div>
  )
}

/* ─── Block body dispatch ────────────────────────────────────────────────── */

type BlockPatch = <B extends OfferBlock>(id: string, updater: (b: B) => B) => void

function BlockBody({
  block,
  editMode,
  isSelected,
  featureNumber,
  onPatch,
}: {
  block: OfferBlock
  editMode: boolean
  isSelected: boolean
  featureNumber: number
  onPatch: BlockPatch
}) {
  switch (block.kind) {
    case 'heading':
      return <HeadingBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'paragraph':
      return <ParagraphBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'feature':
      return <FeatureBody block={block} editMode={editMode} index={featureNumber} onPatch={onPatch} />
    case 'bullets':
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
          placeholder="List item"
        />
      )
    case 'quote':
      return (
        <blockquote className="border-l-[2px] border-citrus-lemon pl-6 [font-feature-settings:'ss01']">
          <EditableText
            value={block.text}
            editable={editMode}
            onCommit={(v) => onPatch(block.id, (b) => ({ ...b, text: v }))}
            placeholder="Customer quote or value statement…"
            multiline
            className="text-lg italic leading-[1.6] text-foreground sm:text-xl"
          />
          <EditableText
            value={block.cite}
            editable={editMode}
            onCommit={(v) => onPatch(block.id, (b) => ({ ...b, cite: v }))}
            placeholder="— source"
            className="mt-3 block text-[11px] uppercase tracking-[0.16em] text-[var(--inkblot-semantic-color-text-tertiary)]"
          />
        </blockquote>
      )
    case 'pricing':
      return <PricingBody block={block} editMode={editMode} isSelected={isSelected} onPatch={onPatch} />
    case 'plans':
      return <PlansBody block={block} editMode={editMode} onPatch={onPatch} />
    case 'divider':
      return (
        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <span className="text-lg tracking-[0.6em]">·   ·   ·</span>
        </div>
      )
  }
}

/* ─── Block bodies ───────────────────────────────────────────────────────── */

function HeadingBody({ block, editMode, onPatch }: { block: HeadingBlock; editMode: boolean; onPatch: BlockPatch }) {
  if (block.level === 1) {
    return (
      <div className="flex items-start gap-3">
        <EditableHeading
          value={block.text}
          editable={editMode}
          onCommit={(v) => onPatch<HeadingBlock>(block.id, (b) => ({ ...b, text: v }))}
          placeholder="Heading H1"
          className="flex-1 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[32px]"
        />
        {editMode ? <HeadingLevelSelect block={block} onPatch={onPatch} /> : null}
      </div>
    )
  }
  if (block.level === 2) {
    // Section divider style: hairline rule + tracked small caps
    return (
      <div className="flex flex-col gap-3">
        <div className="h-px bg-border" aria-hidden />
        <div className="flex items-center justify-between gap-3">
          <EditableHeading
            value={block.text}
            editable={editMode}
            onCommit={(v) => onPatch<HeadingBlock>(block.id, (b) => ({ ...b, text: v }))}
            placeholder="SECTION HEADING"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground"
          />
          {editMode ? <HeadingLevelSelect block={block} onPatch={onPatch} /> : null}
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-start gap-3">
      <EditableHeading
        value={block.text}
        editable={editMode}
        onCommit={(v) => onPatch<HeadingBlock>(block.id, (b) => ({ ...b, text: v }))}
        placeholder="Subheading"
        className="flex-1 text-base font-semibold tracking-tight text-foreground"
      />
      {editMode ? <HeadingLevelSelect block={block} onPatch={onPatch} /> : null}
    </div>
  )
}

function HeadingLevelSelect({ block, onPatch }: { block: HeadingBlock; onPatch: BlockPatch }) {
  return (
    <select
      value={block.level}
      onChange={(e) =>
        onPatch<HeadingBlock>(block.id, (b) => ({
          ...b,
          level: Number(e.target.value) === 1 ? 1 : Number(e.target.value) === 3 ? 3 : 2,
        }))
      }
      className="mt-1 hidden h-6 shrink-0 rounded border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 text-[10px] text-muted-foreground group-data-[selected]/blk:inline-block"
      title="Heading level"
      aria-label="Heading level"
    >
      <option value={1}>H1</option>
      <option value={2}>H2</option>
      <option value={3}>H3</option>
    </select>
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
      placeholder="Write a paragraph…"
      multiline
      className="text-[15px] leading-[1.75] text-foreground [text-wrap:pretty]"
    />
  )
}

function FeatureBody({
  block,
  editMode,
  index,
  onPatch,
}: {
  block: FeatureBlock
  editMode: boolean
  index: number
  onPatch: BlockPatch
}) {
  return (
    <article className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-6 gap-y-2 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-8">
      <span
        className="text-[40px] font-light leading-none text-muted-foreground tabular-nums sm:text-[52px]"
        aria-hidden
      >
        {String(index).padStart(2, '0')}
      </span>
      <div className="flex flex-col gap-2">
        {editMode || block.kicker ? (
          <EditableText
            value={block.kicker}
            editable={editMode}
            onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, kicker: v }))}
            placeholder="Kicker (optional)"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--inkblot-semantic-color-text-tertiary)]"
          />
        ) : null}
        <EditableHeading
          value={block.title}
          editable={editMode}
          onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, title: v }))}
          placeholder="Feature name"
          className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-[22px]"
        />
        <EditableText
          value={block.description}
          editable={editMode}
          onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, description: v }))}
          placeholder="Description…"
          multiline
          className="text-[14px] leading-[1.7] text-[var(--inkblot-semantic-color-text-secondary)]"
        />
        <BulletsList
          items={block.bullets}
          editMode={editMode}
          onChange={(items) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, bullets: items }))}
          placeholder="Bullet"
          compact
        />
        {editMode || block.comparisonNote ? (
          <aside className="mt-3 border-t border-border pt-3">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-citrus-lemon">
              Competitive advantage
            </p>
            <EditableText
              value={block.comparisonNote}
              editable={editMode}
              onCommit={(v) => onPatch<FeatureBlock>(block.id, (b) => ({ ...b, comparisonNote: v }))}
              placeholder="How this sets us apart from the competition…"
              multiline
              className="text-[13px] italic leading-[1.65] text-[var(--inkblot-semantic-color-text-secondary)]"
            />
          </aside>
        ) : null}
      </div>
    </article>
  )
}

function PricingBody({
  block,
  editMode,
  isSelected,
  onPatch,
}: {
  block: PricingBlock
  editMode: boolean
  isSelected: boolean
  onPatch: BlockPatch
}) {
  const marketRange = formatMoneyRange(block.marketValueFrom, block.marketValueTo, block.currency)
  const vatAmount = offerVatAmount(block)
  const total = offerGrandTotal(block)
  const patchP = (u: (b: PricingBlock) => PricingBlock) => onPatch<PricingBlock>(block.id, u)

  // Numeric fields only become inputs once the pricing block is selected.
  // Until then the document reads as flat text, matching the read-only output.
  const editing = editMode && isSelected

  const rows: Array<{ label: string; node: ReactNode; show: boolean }> = [
    {
      label: 'Market value',
      show: editing || marketRange != null,
      node: editing ? (
        <div className="flex items-baseline gap-1.5">
          <InlineNumber
            value={block.marketValueFrom}
            onCommit={(v) => patchP((b) => ({ ...b, marketValueFrom: v }))}
            placeholder="from"
          />
          <span className="text-muted-foreground">–</span>
          <InlineNumber
            value={block.marketValueTo}
            onCommit={(v) => patchP((b) => ({ ...b, marketValueTo: v }))}
            placeholder="to"
          />
          <span className="ml-1 text-[11px] text-muted-foreground">{block.currency}</span>
        </div>
      ) : (
        <span className="font-mono tabular-nums">{marketRange ?? '—'}</span>
      ),
    },
    {
      label: 'Timeline',
      show: editMode || !!block.timeline,
      node: (
        <EditableText
          value={block.timeline}
          editable={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, timeline: v }))}
          placeholder="e.g. 1.5 months"
          className="text-[14px]"
        />
      ),
    },
    {
      label: 'Guarantee',
      show: editMode || !!block.guarantee,
      node: (
        <EditableText
          value={block.guarantee}
          editable={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, guarantee: v }))}
          placeholder="e.g. SEO + technical support"
          className="text-[14px]"
        />
      ),
    },
  ]

  return (
    <section className="flex flex-col gap-5">
      <SectionLabel>Pricing</SectionLabel>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1fr)_auto]">
        <dl className="flex flex-col divide-y divide-border">
          {rows
            .filter((r) => r.show)
            .map((r) => (
              <div key={r.label} className="grid grid-cols-[minmax(0,11rem)_minmax(0,1fr)] items-baseline gap-x-6 py-2.5">
                <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]">
                  {r.label}
                </dt>
                <dd className="text-foreground">{r.node}</dd>
              </div>
            ))}
        </dl>

        <div className="flex flex-col items-start gap-1 sm:items-end sm:text-right">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--inkblot-semantic-color-text-tertiary)]">
            Proposed price
          </span>
          {editing ? (
            <div className="flex items-baseline gap-1.5">
              <select
                value={block.currency}
                onChange={(e) => patchP((b) => ({ ...b, currency: e.target.value as OfferCurrency }))}
                aria-label="Currency"
                className="rounded border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1 py-0.5 text-[10px] text-muted-foreground"
              >
                <option value="EUR">EUR</option>
                <option value="BGN">BGN</option>
                <option value="USD">USD</option>
              </select>
              <InlineNumber
                value={block.price}
                onCommit={(v) => patchP((b) => ({ ...b, price: v ?? 0 }))}
                placeholder="0"
                allowZero
                className="!w-[10ch] font-mono text-[32px] font-semibold tabular-nums sm:text-[40px]"
              />
            </div>
          ) : (
            <span className="font-mono text-[32px] font-semibold leading-none tabular-nums text-foreground sm:text-[40px]">
              {formatMoney(block.price, block.currency)}
            </span>
          )}

          <div className="mt-1 flex flex-col items-start gap-0.5 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:items-end">
            {editing ? (
              <div className="flex items-baseline gap-1">
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
              <span>
                + {block.vatPct}% VAT · {formatMoney(vatAmount, block.currency)}
              </span>
            ) : (
              <span>VAT exempt</span>
            )}
            {block.vatPct > 0 ? (
              <span className="font-medium text-foreground">
                Total · {formatMoney(total, block.currency)}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {editMode || block.note ? (
        <EditableText
          value={block.note}
          editable={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, note: v }))}
          placeholder="Context / market comparison…"
          multiline
          className="max-w-[60ch] text-[13px] italic leading-[1.7] text-[var(--inkblot-semantic-color-text-secondary)]"
        />
      ) : null}
    </section>
  )
}

function PlansBody({ block, editMode, onPatch }: { block: PlansBlock; editMode: boolean; onPatch: BlockPatch }) {
  const patchP = (u: (b: PlansBlock) => PlansBlock) => onPatch<PlansBlock>(block.id, u)
  const updatePlan = (id: string, p: Partial<OfferSupportPlan>) =>
    patchP((b) => ({ ...b, plans: b.plans.map((pl) => (pl.id === id ? { ...pl, ...p } : pl)) }))
  const removePlan = (id: string) => patchP((b) => ({ ...b, plans: b.plans.filter((pl) => pl.id !== id) }))
  const addPlan = () => patchP((b) => ({ ...b, plans: [...b.plans, newSupportPlan()] }))

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <EditableText
          value={block.title}
          editable={editMode}
          onCommit={(v) => patchP((b) => ({ ...b, title: v }))}
          placeholder="TITLE"
          className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]"
        />
        <div className="h-px flex-1 bg-border" aria-hidden />
      </div>

      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-3">
        {block.plans.map((p) => (
          <div key={p.id} className="group/plan relative flex flex-col gap-1.5 px-0 py-3 sm:px-5 sm:py-1">
            <EditableText
              value={p.title}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { title: v })}
              placeholder="Title"
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]"
            />
            <EditableText
              value={p.subtitle ?? ''}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { subtitle: v })}
              placeholder="Subtitle"
              className="text-[13px] text-[var(--inkblot-semantic-color-text-secondary)]"
            />
            <EditableText
              value={p.priceLabel}
              editable={editMode}
              onCommit={(v) => updatePlan(p.id, { priceLabel: v })}
              placeholder="Price"
              className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-foreground"
            />
            {editMode ? (
              <button
                type="button"
                onClick={() => removePlan(p.id)}
                aria-label="Remove plan"
                title="Remove"
                className="absolute top-2 right-0 hidden h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-background/70 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] group-data-[selected]/blk:inline-flex sm:right-2"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
              </button>
            ) : null}
          </div>
        ))}
        {editMode ? (
          <button
            type="button"
            onClick={addPlan}
            className="hidden min-h-[88px] items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground group-data-[selected]/blk:flex"
          >
            <Plus className="h-4 w-4" aria-hidden /> Add plan
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
  compact,
}: {
  items: string[]
  editMode: boolean
  onChange: (items: string[]) => void
  placeholder?: string
  /** When true, tighter leading — for bullets nested inside a feature block. */
  compact?: boolean
}) {
  const patch = (i: number, v: string) => onChange(items.map((it, idx) => (idx === i ? v : it)))
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i))
  const add = () => onChange([...items, ''])

  if (!editMode && items.every((it) => !it)) return null

  const liCls = compact
    ? 'relative flex items-start gap-2 pl-5 text-[14px] leading-[1.65] text-[var(--inkblot-semantic-color-text-secondary)]'
    : 'relative flex items-start gap-2 pl-5 text-[15px] leading-[1.75] text-[var(--inkblot-semantic-color-text-secondary)]'

  return (
    <ul className="mt-1 flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className={liCls}>
          <span aria-hidden className="absolute left-0 top-[0.65em] h-[3px] w-[3px] rounded-full bg-foreground" />
          <EditableText
            value={it}
            editable={editMode}
            onCommit={(v) => patch(i, v)}
            placeholder={placeholder ?? 'Bullet'}
            className="flex-1"
          />
          {editMode ? (
            <button
              type="button"
              onClick={() => remove(i)}
              aria-label="Remove bullet"
              className="hidden h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-background/70 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] group-data-[selected]/blk:inline-flex"
            >
              <Trash2 className="h-3.5 w-3.5" aria-hidden />
            </button>
          ) : null}
        </li>
      ))}
      {editMode ? (
        <li className="mt-0.5 hidden group-data-[selected]/blk:block">
          <button
            type="button"
            onClick={add}
            className="inline-flex h-7 items-center gap-1.5 rounded-md border border-dashed border-border px-2.5 text-[11px] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden /> Add bullet
          </button>
        </li>
      ) : null}
    </ul>
  )
}

/* ─── Small display helpers ──────────────────────────────────────────────── */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]">
        {children}
      </span>
      <div className="h-px flex-1 bg-border" aria-hidden />
    </div>
  )
}

function MetaLabel({ children }: { children: ReactNode }) {
  return (
    <dt className="text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]">
      {children}
    </dt>
  )
}

function MetaValue({ children }: { children: ReactNode }) {
  return <dd className="text-[12px]">{children}</dd>
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
      className="min-h-[28px] rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 py-1 text-[11px] text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"
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
      className={`min-h-[28px] w-[7ch] rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 py-1 font-mono text-sm tabular-nums text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] ${
        className ?? ''
      }`}
    />
  )
}
