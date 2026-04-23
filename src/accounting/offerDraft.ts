/**
 * Offer draft — a freeform, block-based document.
 *
 * There are no fixed "sections". A draft carries meta (client/project/dates)
 * plus an ordered list of blocks. Each block renders a piece of the offer:
 * a heading, paragraph, feature card, bullets, pricing panel, support plans,
 * a quote, or a divider. The user adds, removes, reorders, and edits them at
 * will — the preview always reflects the blocks[] array in order.
 *
 * Types live in `offerDraft.types.ts` so `offerConfig.ts` can reference them
 * without creating an import cycle. Legacy (pre-block) records are migrated
 * to blocks automatically in `normalizeOfferDraft`.
 */

import { OFFER_CONFIG, formatOfferNumber } from './offerConfig'
import { bgDocumentTypeById } from './accountingConstants'
import type {
  FeatureBlock,
  HeadingBlock,
  OfferBlock,
  OfferBlockKind,
  OfferCurrency,
  OfferDraft,
  OfferSupportPlan,
  ParagraphBlock,
  PlansBlock,
  PricingBlock,
} from './offerDraft.types'

export type {
  FeatureBlock,
  HeadingBlock,
  OfferBlock,
  OfferBlockKind,
  OfferCurrency,
  OfferDraft,
  OfferSupportPlan,
  ParagraphBlock,
  PlansBlock,
  PricingBlock,
} from './offerDraft.types'

/* ─── Money formatting ───────────────────────────────────────────────────── */

export const OFFER_CURRENCY_SYMBOL: Record<OfferCurrency, string> = {
  BGN: 'лв',
  EUR: '€',
  USD: '$',
}

export function formatMoney(amount: number, currency: OfferCurrency): string {
  const sym = OFFER_CURRENCY_SYMBOL[currency] ?? currency
  const n = amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  return currency === 'BGN' ? `${n} ${sym}` : `${sym}${n}`
}

export function formatMoneyRange(
  from: number | undefined,
  to: number | undefined,
  currency: OfferCurrency,
): string | null {
  if (from == null && to == null) return null
  if (from != null && to != null) return `${formatMoney(from, currency)} – ${formatMoney(to, currency)}`
  return formatMoney((from ?? to) as number, currency)
}

/* ─── Block totals / lookups ─────────────────────────────────────────────── */

export function findPricingBlock(draft: OfferDraft): PricingBlock | undefined {
  return draft.blocks.find((b): b is PricingBlock => b.kind === 'pricing')
}

export function offerVatAmount(pricing: Pick<PricingBlock, 'price' | 'vatPct'>): number {
  return Math.round(pricing.price * (pricing.vatPct / 100) * 100) / 100
}

export function offerGrandTotal(pricing: Pick<PricingBlock, 'price' | 'vatPct'>): number {
  return Math.round((pricing.price + offerVatAmount(pricing)) * 100) / 100
}

export function draftGrandTotal(draft: OfferDraft): number {
  const p = findPricingBlock(draft)
  return p ? offerGrandTotal(p) : 0
}

export function draftCurrency(draft: OfferDraft): OfferCurrency {
  return findPricingBlock(draft)?.currency ?? OFFER_CONFIG.defaultCurrency
}

/* ─── Block factories ────────────────────────────────────────────────────── */

function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `id-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`
}

export function createBlock(kind: OfferBlockKind): OfferBlock {
  const id = uid()
  switch (kind) {
    case 'heading':
      return { id, kind, level: 2, text: '' }
    case 'paragraph':
      return { id, kind, text: '' }
    case 'feature':
      return { id, kind, kicker: '', title: '', description: '', bullets: [], comparisonNote: '' }
    case 'bullets':
      return { id, kind, items: [''] }
    case 'quote':
      return { id, kind, text: '', cite: '' }
    case 'pricing':
      return {
        id,
        kind,
        currency: OFFER_CONFIG.defaultCurrency,
        price: 0,
        vatPct: OFFER_CONFIG.defaultVatPct,
        marketValueFrom: undefined,
        marketValueTo: undefined,
        timeline: '',
        guarantee: '',
        note: '',
      }
    case 'plans':
      return { id, kind, title: 'Месечна поддръжка', plans: [] }
    case 'divider':
      return { id, kind }
  }
}

export function newSupportPlan(): OfferSupportPlan {
  return { id: uid(), title: '', subtitle: '', priceLabel: '' }
}

export function cloneBlock(block: OfferBlock): OfferBlock {
  switch (block.kind) {
    case 'feature':
      return { ...block, id: uid(), bullets: [...block.bullets] }
    case 'bullets':
      return { ...block, id: uid(), items: [...block.items] }
    case 'plans':
      return { ...block, id: uid(), plans: block.plans.map((p) => ({ ...p, id: uid() })) }
    default:
      return { ...block, id: uid() }
  }
}

/** Human label for a block kind (used in the "+ Add block" menu). */
export const BLOCK_KIND_LABEL: Record<OfferBlockKind, string> = {
  heading: 'Заглавие',
  paragraph: 'Параграф',
  feature: 'Функционалност',
  bullets: 'Списък',
  quote: 'Цитат',
  pricing: 'Ценообразуване',
  plans: 'Месечна поддръжка',
  divider: 'Разделител',
}

/* ─── Dates ──────────────────────────────────────────────────────────────── */

function isoToday(): string {
  return new Date().toISOString().slice(0, 10)
}

function isoPlusDays(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

/* ─── Defaults ───────────────────────────────────────────────────────────── */

export function emptyOfferDraft(): OfferDraft {
  return {
    documentTypeId: 'oferta',
    documentNumber: formatOfferNumber(OFFER_CONFIG.documentNumberStart),
    clientName: '',
    clientOrg: '',
    clientEmail: '',
    projectName: '',
    blocks: [createBlock('paragraph')],
    brandName: OFFER_CONFIG.defaultBrand.name,
    brandTagline: OFFER_CONFIG.defaultBrand.tagline,
    brandUrl: OFFER_CONFIG.defaultBrand.url,
    issueDate: isoToday(),
    validUntil: isoPlusDays(OFFER_CONFIG.defaultValidityDays),
  }
}

/* ─── Migration / normalization ──────────────────────────────────────────── */

const ALL_BLOCK_KINDS: OfferBlockKind[] = [
  'heading',
  'paragraph',
  'feature',
  'bullets',
  'quote',
  'pricing',
  'plans',
  'divider',
]

function normalizeBlock(input: unknown, idx: number): OfferBlock | null {
  if (!input || typeof input !== 'object') return null
  const raw = input as Record<string, unknown>
  const kind = typeof raw.kind === 'string' ? (raw.kind as OfferBlockKind) : null
  if (!kind || !ALL_BLOCK_KINDS.includes(kind)) return null
  const id = typeof raw.id === 'string' && raw.id ? raw.id : `blk-${idx}-${uid()}`
  const str = (v: unknown, f = ''): string => (typeof v === 'string' ? v : f)
  const num = (v: unknown, f = 0): number => {
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : f
  }
  const optNum = (v: unknown): number | undefined => {
    if (v == null || v === '') return undefined
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : undefined
  }
  const strArr = (v: unknown): string[] =>
    Array.isArray(v) ? (v as unknown[]).map((x) => str(x)).filter(Boolean) : []
  const curr = (v: unknown): OfferCurrency =>
    v === 'BGN' || v === 'EUR' || v === 'USD' ? v : OFFER_CONFIG.defaultCurrency

  switch (kind) {
    case 'heading': {
      const lvl = raw.level === 1 || raw.level === 2 || raw.level === 3 ? raw.level : 2
      return { id, kind, level: lvl, text: str(raw.text) }
    }
    case 'paragraph':
      return { id, kind, text: str(raw.text) }
    case 'feature':
      return {
        id,
        kind,
        kicker: str(raw.kicker),
        title: str(raw.title),
        description: str(raw.description),
        bullets: strArr(raw.bullets),
        comparisonNote: str(raw.comparisonNote),
      }
    case 'bullets': {
      const items = strArr(raw.items)
      return { id, kind, items: items.length ? items : [''] }
    }
    case 'quote':
      return { id, kind, text: str(raw.text), cite: str(raw.cite) }
    case 'pricing':
      return {
        id,
        kind,
        currency: curr(raw.currency),
        price: Math.max(0, num(raw.price)),
        vatPct: Math.max(0, Math.min(100, num(raw.vatPct, OFFER_CONFIG.defaultVatPct))),
        marketValueFrom: optNum(raw.marketValueFrom),
        marketValueTo: optNum(raw.marketValueTo),
        timeline: str(raw.timeline),
        guarantee: str(raw.guarantee),
        note: str(raw.note),
      }
    case 'plans': {
      const plans: OfferSupportPlan[] = Array.isArray(raw.plans)
        ? (raw.plans as unknown[]).map((p, i) => {
            const po = (p ?? {}) as Record<string, unknown>
            return {
              id: str(po.id, `plan-${i}-${uid()}`),
              title: str(po.title),
              subtitle: str(po.subtitle),
              priceLabel: str(po.priceLabel),
            }
          })
        : []
      return { id, kind, title: str(raw.title, 'Месечна поддръжка'), plans }
    }
    case 'divider':
      return { id, kind }
  }
}

/**
 * Convert legacy (v1) draft shape → block-based draft. The legacy shape had
 * `tagline`, `features[]`, pricing fields at the top level, `supportPlans[]`,
 * and `closingNote`. We rebuild a blocks[] array preserving the order.
 */
function migrateLegacyToBlocks(raw: Record<string, unknown>): OfferBlock[] {
  const blocks: OfferBlock[] = []
  const str = (v: unknown, f = ''): string => (typeof v === 'string' ? v : f)
  const num = (v: unknown, f = 0): number => {
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : f
  }
  const optNum = (v: unknown): number | undefined => {
    if (v == null || v === '') return undefined
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : undefined
  }

  const tagline = str(raw.tagline)
  if (tagline) blocks.push({ id: uid(), kind: 'paragraph', text: tagline })

  if (Array.isArray(raw.features)) {
    for (const f of raw.features) {
      const fo = (f ?? {}) as Record<string, unknown>
      const bullets = Array.isArray(fo.bullets)
        ? (fo.bullets as unknown[]).map((b) => str(b)).filter(Boolean)
        : []
      blocks.push({
        id: uid(),
        kind: 'feature',
        kicker: str(fo.kicker),
        title: str(fo.title),
        description: str(fo.description),
        bullets,
        comparisonNote: str(fo.comparisonNote),
      })
    }
  }

  const hasPricing =
    raw.price != null ||
    raw.marketValueFrom != null ||
    raw.marketValueTo != null ||
    raw.timeline != null ||
    raw.guarantee != null ||
    raw.pricingNote != null
  if (hasPricing) {
    blocks.push({
      id: uid(),
      kind: 'pricing',
      currency:
        raw.currency === 'BGN' || raw.currency === 'EUR' || raw.currency === 'USD'
          ? raw.currency
          : OFFER_CONFIG.defaultCurrency,
      price: Math.max(0, num(raw.price)),
      vatPct: Math.max(0, Math.min(100, num(raw.vatPct, OFFER_CONFIG.defaultVatPct))),
      marketValueFrom: optNum(raw.marketValueFrom),
      marketValueTo: optNum(raw.marketValueTo),
      timeline: str(raw.timeline),
      guarantee: str(raw.guarantee),
      note: str(raw.pricingNote),
    })
  }

  if (Array.isArray(raw.supportPlans) && raw.supportPlans.length > 0) {
    blocks.push({
      id: uid(),
      kind: 'plans',
      title: 'Месечна поддръжка',
      plans: (raw.supportPlans as unknown[]).map((p, i) => {
        const po = (p ?? {}) as Record<string, unknown>
        return {
          id: str(po.id, `plan-${i}-${uid()}`),
          title: str(po.title),
          subtitle: str(po.subtitle),
          priceLabel: str(po.priceLabel),
        }
      }),
    })
  }

  const closing = str(raw.closingNote)
  if (closing) blocks.push({ id: uid(), kind: 'paragraph', text: closing })

  return blocks
}

export function normalizeOfferDraft(input: unknown): OfferDraft {
  const empty = emptyOfferDraft()
  if (!input || typeof input !== 'object') return empty
  const raw = input as Record<string, unknown>

  const str = (v: unknown, f = ''): string => (typeof v === 'string' ? v : f)

  const typeId = str(raw.documentTypeId, 'oferta')
  const documentTypeId = bgDocumentTypeById(typeId) ? typeId : 'oferta'

  const legacyRawBlocks = Array.isArray(raw.blocks)
    ? ((raw.blocks as unknown[])
        .map((b, i) => normalizeBlock(b, i))
        .filter((b): b is OfferBlock => b != null))
    : null

  const blocks =
    legacyRawBlocks && legacyRawBlocks.length > 0
      ? legacyRawBlocks
      : migrateLegacyToBlocks(raw)

  return {
    documentTypeId,
    documentNumber: str(raw.documentNumber, empty.documentNumber),
    clientName: str(raw.clientName),
    clientOrg: str(raw.clientOrg),
    clientEmail: str(raw.clientEmail),
    projectName: str(raw.projectName),
    blocks: blocks.length > 0 ? blocks : [createBlock('paragraph')],
    brandName: str(raw.brandName, empty.brandName),
    brandTagline: str(raw.brandTagline, empty.brandTagline),
    brandUrl: str(raw.brandUrl, empty.brandUrl),
    issueDate: raw.issueDate ? str(raw.issueDate) : undefined,
    validUntil: raw.validUntil ? str(raw.validUntil) : undefined,
  }
}

/* ─── Seed ───────────────────────────────────────────────────────────────── */

/**
 * Seeded reference offer — the ЛОББИ ЕООД auto-import platform. Pre-loaded so
 * the Offers list is never empty and the block model has a realistic example.
 */
export function seedLobbyOffer(): OfferDraft {
  const feature = (kicker: string, title: string, description: string, bullets: string[], cmp: string): FeatureBlock => ({
    id: uid(),
    kind: 'feature',
    kicker,
    title,
    description,
    bullets,
    comparisonNote: cmp,
  })

  const paragraph = (text: string): ParagraphBlock => ({ id: uid(), kind: 'paragraph', text })
  const heading = (text: string, level: 1 | 2 | 3 = 2): HeadingBlock => ({
    id: uid(),
    kind: 'heading',
    level,
    text,
  })
  const pricing = (p: Omit<PricingBlock, 'id' | 'kind'>): PricingBlock => ({ id: uid(), kind: 'pricing', ...p })
  const plans = (ps: Omit<OfferSupportPlan, 'id'>[]): PlansBlock => ({
    id: uid(),
    kind: 'plans',
    title: 'Месечна поддръжка',
    plans: ps.map((p) => ({ id: uid(), ...p })),
  })

  return {
    documentTypeId: 'oferta',
    documentNumber: formatOfferNumber(OFFER_CONFIG.documentNumberStart),
    clientName: 'ЛОББИ ЕООД',
    clientOrg: 'ЛОББИ ЕООД',
    clientEmail: '',
    projectName: 'Премиум Платформа за Авто-Внос',
    blocks: [
      paragraph(
        'Предлагаме цялостно изграждане на високотехнологична и професионална платформа, която ще позиционира ЛОББИ ЕООД като лидер на пазара. Проектът включва гарантирана SEO оптимизация, която ще осигури първи позиции в Google търсенията за внос на автомобили.',
      ),
      heading('Какво включва проектът'),
      feature(
        'Потребителска Екосистема',
        'Американски Аукциони',
        'Пълна синхронизация с топ платформи: Copart, IAAI, Manheim, ADESA и AutoBidMaster. Автоматично извличане на обяви и данни в реално време.',
        [
          'Регистрация, вход, любими автомобили (Wishlist)',
          'Автоматизирани имейл кампании и известия при нови търгове',
        ],
        'WinCars разчита на мениджър, който следи пазара 24/7. Вашата платформа прави това напълно автоматично чрез софтуер и AI — оферти на секундата.',
      ),
      feature(
        'Система за Помощ',
        'AI Чатбот Асистент',
        'Интелигентен бот (в стил Claude/ChatGPT), който управлява филтри, превключва страници и отговаря на клиентски запитвания.',
        [
          'Професионален Ticketing модул за обслужване на клиенти',
          'Проследяване на запитвания и проблеми с доставки',
        ],
        'Докато конкурентите имат статични страници, ЛОББИ ще разполага с AI чатбот, който проактивно помага на клиента да намери точно търсеното.',
      ),
      feature(
        'Dashboard за клиента',
        'Собствен Каталог',
        'Модул за представяне на наличните автомобили на ЛОББИ ЕООД, с детайлни галерии и характеристики.',
        ['Детайлни галерии и характеристики', 'Табло за следене на любими коли'],
        'Клиентите получават собствено табло (Dashboard) за следене на любими коли, вместо да чакат обратна връзка по телефон.',
      ),
      pricing({
        currency: 'EUR',
        price: 3500,
        vatPct: 20,
        marketValueFrom: 5000,
        marketValueTo: 8500,
        timeline: '1.5 месеца',
        guarantee: 'SEO оптимизация и техническа поддръжка',
        note:
          'Стандартната пазарна цена за разработка на подобна инфраструктура (API интеграции, AI и персонализирани потребителски панели) варира между 5,000 € и 8,500 € в други IT агенции. Ние Ви предлагаме ексклузивни условия, за да изградим дългосрочно партньорство.',
      }),
      plans([
        { title: 'Месечна поддръжка', subtitle: 'Първи 3 месеца', priceLabel: '0 €' },
        { title: 'Месечна поддръжка', subtitle: 'След 3-ия месец', priceLabel: '19.99 €' },
        { title: 'AI Токени', subtitle: 'Разплащане', priceLabel: 'По употреба' },
      ]),
      paragraph(
        'Защо да се доверите на нас? Ние не просто създаваме уебсайтове — изграждаме машини за продажби. Нашата цел е платформата Ви да бъде технически безупречна, визуално зашеметяваща и оптимизирана да конвертира посетителите в реални клиенти. Спестяваме скрити разходи за AI токени и предлагаме несравнимо съотношение между цена и качество.',
      ),
    ],
    brandName: OFFER_CONFIG.defaultBrand.name,
    brandTagline: OFFER_CONFIG.defaultBrand.tagline,
    brandUrl: OFFER_CONFIG.defaultBrand.url,
    issueDate: isoToday(),
    validUntil: isoPlusDays(OFFER_CONFIG.defaultValidityDays),
  }
}
