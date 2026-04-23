/**
 * Offer / Proposal store.
 *
 * - LocalStorage-backed (separate from invoices so they can evolve apart).
 * - Auto-assigns the next document number from OFFER_CONFIG.documentNumberStart
 *   (default: 41). Any free-form user edit is preserved; the next blank offer
 *   continues from the highest numeric value found in existing records.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { OFFER_CONFIG, extractOfferNumber, formatOfferNumber } from './offerConfig'
import {
  cloneBlock,
  emptyOfferDraft,
  normalizeOfferDraft,
  seedLobbyOffer,
  type OfferDraft,
} from './offerDraft'

export type OfferStatus = 'draft' | 'pending' | 'paid' | 'overdue'

export interface OfferRecord {
  recordId: string
  status: OfferStatus
  draft: OfferDraft
}

const STORAGE_KEY = 'citron-accounting-offers-v2'
const NEW_OFFER_ROUTE = 'new'

export { NEW_OFFER_ROUTE }

interface PersistedShape {
  version: 2
  offers: OfferRecord[]
}

/* ─── Numbering ──────────────────────────────────────────────────────────── */

function nextNumericOfferNumber(offers: OfferRecord[]): number {
  let max = OFFER_CONFIG.documentNumberStart - 1
  for (const o of offers) {
    const n = extractOfferNumber(o.draft.documentNumber)
    if (Number.isFinite(n) && n > max) max = n
  }
  return max + 1
}

export function nextOfferNumber(offers: OfferRecord[]): string {
  return formatOfferNumber(nextNumericOfferNumber(offers))
}

/* ─── Persistence ────────────────────────────────────────────────────────── */

function seedOffers(): OfferRecord[] {
  return [{ recordId: 'seed-offer-001', status: 'pending', draft: seedLobbyOffer() }]
}

function defaultPersisted(): PersistedShape {
  return { version: 2, offers: seedOffers() }
}

function isOfferStatus(s: unknown): s is OfferStatus {
  return s === 'draft' || s === 'pending' || s === 'paid' || s === 'overdue'
}

function loadPersisted(): PersistedShape {
  if (typeof window === 'undefined') return defaultPersisted()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      // Also try the legacy v1 key for a lossless migration.
      const legacy = window.localStorage.getItem('citron-accounting-offers-v1')
      if (!legacy) return defaultPersisted()
      const parsed = JSON.parse(legacy) as Record<string, unknown>
      return loadFromPayload(parsed)
    }
    const parsed = JSON.parse(raw) as Record<string, unknown>
    return loadFromPayload(parsed)
  } catch {
    return defaultPersisted()
  }
}

function loadFromPayload(parsed: Record<string, unknown>): PersistedShape {
  if (!Array.isArray(parsed.offers)) return defaultPersisted()
  const offers: OfferRecord[] = (parsed.offers as unknown[]).map((o, i) => {
    const rec = (o ?? {}) as Record<string, unknown>
    return {
      recordId:
        typeof rec.recordId === 'string' && rec.recordId
          ? rec.recordId
          : `rec-${i}-${Math.random().toString(36).slice(2)}`,
      status: isOfferStatus(rec.status) ? rec.status : 'draft',
      draft: normalizeOfferDraft(rec.draft),
    }
  })
  return { version: 2, offers }
}

function savePersisted(data: PersistedShape) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* ignore quota */
  }
}

/* ─── Reactive store ─────────────────────────────────────────────────────── */

let memory: PersistedShape = defaultPersisted()
const listeners = new Set<() => void>()

function getSnapshot(): PersistedShape {
  return memory
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function emit() {
  listeners.forEach((l) => l())
}

function setMemory(next: PersistedShape) {
  memory = next
  savePersisted(next)
  emit()
}

if (typeof window !== 'undefined') {
  memory = loadPersisted()
}

/* ─── Context ────────────────────────────────────────────────────────────── */

interface OfferStoreValue {
  offers: OfferRecord[]
  getOffer: (recordId: string) => OfferRecord | undefined
  /** Next document number as a formatted string (respects prefix/padding). */
  getNextOfferNumber: () => string
  createBlank: () => string
  createFromDraft: (draft: OfferDraft, status?: OfferStatus) => string
  updateDraft: (recordId: string, draft: OfferDraft) => void
  updateStatus: (recordId: string, status: OfferStatus) => void
  deleteOffer: (recordId: string) => void
  duplicateOffer: (recordId: string) => string | null
  resetToSeed: () => void
}

const OfferStoreContext = createContext<OfferStoreValue | null>(null)

export function OfferStoreProvider({ children }: { children: ReactNode }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted())

  const getOffer = useCallback(
    (recordId: string) => data.offers.find((o) => o.recordId === recordId),
    [data.offers],
  )

  const getNextOfferNumber = useCallback(() => nextOfferNumber(data.offers), [data.offers])

  const createBlank = useCallback(() => {
    const recordId = crypto.randomUUID()
    const draft: OfferDraft = {
      ...emptyOfferDraft(),
      documentNumber: nextOfferNumber(memory.offers),
    }
    const rec: OfferRecord = { recordId, status: 'draft', draft }
    setMemory({ ...memory, offers: [rec, ...memory.offers] })
    return recordId
  }, [])

  const createFromDraft = useCallback((draft: OfferDraft, status: OfferStatus = 'draft') => {
    const recordId = crypto.randomUUID()
    const rec: OfferRecord = { recordId, status, draft }
    setMemory({ ...memory, offers: [rec, ...memory.offers] })
    return recordId
  }, [])

  const updateDraft = useCallback((recordId: string, draft: OfferDraft) => {
    setMemory({
      ...memory,
      offers: memory.offers.map((o) => (o.recordId === recordId ? { ...o, draft } : o)),
    })
  }, [])

  const updateStatus = useCallback((recordId: string, status: OfferStatus) => {
    setMemory({
      ...memory,
      offers: memory.offers.map((o) => (o.recordId === recordId ? { ...o, status } : o)),
    })
  }, [])

  const deleteOffer = useCallback((recordId: string) => {
    setMemory({ ...memory, offers: memory.offers.filter((o) => o.recordId !== recordId) })
  }, [])

  const duplicateOffer = useCallback((recordId: string) => {
    const src = memory.offers.find((o) => o.recordId === recordId)
    if (!src) return null
    const newId = crypto.randomUUID()
    const copy: OfferRecord = {
      recordId: newId,
      status: 'draft',
      draft: {
        ...src.draft,
        documentNumber: nextOfferNumber(memory.offers),
        blocks: src.draft.blocks.map(cloneBlock),
      },
    }
    setMemory({ ...memory, offers: [copy, ...memory.offers] })
    return newId
  }, [])

  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted())
  }, [])

  const value = useMemo<OfferStoreValue>(
    () => ({
      offers: data.offers,
      getOffer,
      getNextOfferNumber,
      createBlank,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteOffer,
      duplicateOffer,
      resetToSeed,
    }),
    [
      data.offers,
      getOffer,
      getNextOfferNumber,
      createBlank,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteOffer,
      duplicateOffer,
      resetToSeed,
    ],
  )

  return <OfferStoreContext.Provider value={value}>{children}</OfferStoreContext.Provider>
}

export function useOfferStore() {
  const ctx = useContext(OfferStoreContext)
  if (!ctx) throw new Error('useOfferStore must be used within OfferStoreProvider')
  return ctx
}
