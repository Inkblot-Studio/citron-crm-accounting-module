import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import type { InvoiceProduct } from '@citron-systems/citron-ui'
import type { InvoiceDraft } from './invoiceDraft'
import { normalizeInvoiceDraft } from './invoiceDraft'
import { INITIAL_CLIENTS, type ClientEntry, type TaxPresetEntry } from './accountingConstants'

export type InvoiceStatus = 'paid' | 'pending' | 'overdue' | 'draft'

export interface InvoiceRecord {
  recordId: string
  status: InvoiceStatus
  draft: InvoiceDraft
}

const STORAGE_KEY = 'citron-accounting-store-v1'
const NEW_RECORD_ROUTE = 'new'

export { NEW_RECORD_ROUTE }

interface PersistedShape {
  version: 2
  invoices: InvoiceRecord[]
  clients: ClientEntry[]
  extraProducts: InvoiceProduct[]
  extraBankLabels: string[]
  extraPaymentMethods: string[]
  extraTaxPresets: TaxPresetEntry[]
}

function buildSeedInvoices(): InvoiceRecord[] {
  return [
    {
      recordId: 'seed-001',
      status: 'paid',
      draft: {
        invoiceNumber: 'INV-2026-001',
        clientName: 'Acme Corp',
        clientEmail: 'billing@acme.com',
        lineItems: [
          { id: 'seed-001-a', productLabel: 'Strategy Consulting', quantity: 62, unitPrice: 200 },
        ],
        invoiceTypeLabel: 'Standard',
        paymentMethodLabel: 'Bank Transfer',
        taxTypeLabel: 'VAT 0%',
        taxRatePct: 0,
        bankAccountLabel: 'Main Account (****4821)',
        notes: '',
        dueTerms: 'Net 30',
        issueDate: '2026-02-10',
        dueDate: '2026-03-12',
      },
    },
    {
      recordId: 'seed-002',
      status: 'pending',
      draft: {
        invoiceNumber: 'INV-2026-002',
        clientName: 'TechVentures',
        clientEmail: 'ap@techventures.io',
        lineItems: [{ id: 'seed-002-a', productLabel: 'Web Development', quantity: 30, unitPrice: 150 }],
        invoiceTypeLabel: 'Standard',
        paymentMethodLabel: 'Credit Card',
        taxTypeLabel: 'VAT 0%',
        taxRatePct: 0,
        bankAccountLabel: 'Main Account (****4821)',
        notes: '',
        dueTerms: 'Net 30',
        issueDate: '2026-02-18',
        dueDate: '2026-03-20',
      },
    },
    {
      recordId: 'seed-003',
      status: 'overdue',
      draft: {
        invoiceNumber: 'INV-2026-003',
        clientName: 'DataFlow Labs',
        clientEmail: 'finance@dataflow.dev',
        lineItems: [{ id: 'seed-003-a', productLabel: 'Hosting & Infrastructure', quantity: 12, unitPrice: 650 }],
        invoiceTypeLabel: 'Standard',
        paymentMethodLabel: 'Bank Transfer',
        taxTypeLabel: 'VAT 0%',
        taxRatePct: 0,
        bankAccountLabel: 'Secondary Account (****7390)',
        notes: 'Reminder sent.',
        dueTerms: 'Net 15',
        issueDate: '2026-01-28',
        dueDate: '2026-02-12',
      },
    },
    {
      recordId: 'seed-004',
      status: 'draft',
      draft: {
        invoiceNumber: 'INV-2026-004',
        clientName: 'GlobalTech',
        clientEmail: 'invoices@globaltech.com',
        lineItems: [{ id: 'seed-004-a', productLabel: 'Support Package', quantity: 22, unitPrice: 1000 }],
        invoiceTypeLabel: 'Proforma',
        paymentMethodLabel: 'Bank Transfer',
        taxTypeLabel: 'VAT 0%',
        taxRatePct: 0,
        bankAccountLabel: 'Main Account (****4821)',
        notes: 'Draft — review before send.',
        dueTerms: 'Net 30',
        issueDate: '2026-02-25',
        dueDate: '2026-03-27',
      },
    },
  ]
}

function defaultPersisted(): PersistedShape {
  return {
    version: 2,
    invoices: buildSeedInvoices(),
    clients: [...INITIAL_CLIENTS],
    extraProducts: [],
    extraBankLabels: [],
    extraPaymentMethods: [],
    extraTaxPresets: [],
  }
}

function migratePersisted(raw: Record<string, unknown>): PersistedShape | null {
  const invoices = raw.invoices
  const clients = raw.clients
  if (!Array.isArray(invoices) || !Array.isArray(clients)) return null

  if (raw.version === 1) {
    return {
      version: 2,
      invoices: invoices as InvoiceRecord[],
      clients: clients as ClientEntry[],
      extraProducts: [],
      extraBankLabels: [],
      extraPaymentMethods: [],
      extraTaxPresets: [],
    }
  }

  if (raw.version === 2) {
    return {
      version: 2,
      invoices: invoices as InvoiceRecord[],
      clients: clients as ClientEntry[],
      extraProducts: (Array.isArray(raw.extraProducts) ? raw.extraProducts : []) as InvoiceProduct[],
      extraBankLabels: (Array.isArray(raw.extraBankLabels) ? raw.extraBankLabels : []) as string[],
      extraPaymentMethods: (Array.isArray(raw.extraPaymentMethods) ? raw.extraPaymentMethods : []) as string[],
      extraTaxPresets: (Array.isArray(raw.extraTaxPresets) ? raw.extraTaxPresets : []) as TaxPresetEntry[],
    }
  }

  /* Legacy payloads without `version` (same shape as v1) */
  if (raw.version === undefined) {
    return {
      version: 2,
      invoices: invoices as InvoiceRecord[],
      clients: clients as ClientEntry[],
      extraProducts: [],
      extraBankLabels: [],
      extraPaymentMethods: [],
      extraTaxPresets: [],
    }
  }

  return null
}

function loadPersisted(): PersistedShape {
  if (typeof window === 'undefined') return defaultPersisted()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultPersisted()
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const migrated = migratePersisted(parsed)
    if (migrated) {
      return {
        ...migrated,
        invoices: migrated.invoices.map((inv) => ({
          ...inv,
          draft: normalizeInvoiceDraft(inv.draft as unknown),
        })),
      }
    }
    return defaultPersisted()
  } catch {
    return defaultPersisted()
  }
}

function savePersisted(data: PersistedShape) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* ignore quota */
  }
}

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

function hydrateFromStorage() {
  memory = loadPersisted()
  emit()
}

if (typeof window !== 'undefined') {
  hydrateFromStorage()
}

interface InvoiceStoreValue {
  invoices: InvoiceRecord[]
  clients: ClientEntry[]
  extraProducts: InvoiceProduct[]
  extraBankLabels: string[]
  extraPaymentMethods: string[]
  extraTaxPresets: TaxPresetEntry[]
  getInvoice: (recordId: string) => InvoiceRecord | undefined
  createFromDraft: (draft: InvoiceDraft, status?: InvoiceStatus) => string
  updateDraft: (recordId: string, draft: InvoiceDraft) => void
  updateStatus: (recordId: string, status: InvoiceStatus) => void
  deleteInvoice: (recordId: string) => void
  duplicateInvoice: (recordId: string) => string | null
  addClient: (client: ClientEntry) => void
  addProduct: (product: InvoiceProduct) => void
  addBankLabel: (label: string) => void
  addPaymentMethod: (label: string) => void
  addTaxPreset: (preset: TaxPresetEntry) => void
  /** Mark as sent to client (pending payment) */
  markSent: (recordId: string, draft: InvoiceDraft) => void
  markPaid: (recordId: string) => void
  resetToSeed: () => void
}

const InvoiceStoreContext = createContext<InvoiceStoreValue | null>(null)

export function InvoiceStoreProvider({ children }: { children: ReactNode }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted())

  const getInvoice = useCallback((recordId: string) => data.invoices.find((i) => i.recordId === recordId), [data.invoices])

  const addClient = useCallback((client: ClientEntry) => {
    setMemory({
      ...memory,
      clients: [...memory.clients.filter((c) => c.id !== client.id), client],
    })
  }, [])

  const addProduct = useCallback((product: InvoiceProduct) => {
    const next = memory.extraProducts.filter((p) => p.id !== product.id)
    setMemory({
      ...memory,
      extraProducts: [...next, product],
    })
  }, [])

  const addBankLabel = useCallback((label: string) => {
    const t = label.trim()
    if (!t) return
    setMemory({
      ...memory,
      extraBankLabels: [...memory.extraBankLabels.filter((x) => x !== t), t],
    })
  }, [])

  const addPaymentMethod = useCallback((label: string) => {
    const t = label.trim()
    if (!t) return
    setMemory({
      ...memory,
      extraPaymentMethods: [...memory.extraPaymentMethods.filter((x) => x !== t), t],
    })
  }, [])

  const addTaxPreset = useCallback((preset: TaxPresetEntry) => {
    const label = preset.label.trim()
    if (!label) return
    const next = memory.extraTaxPresets.filter((p) => p.label !== label)
    setMemory({
      ...memory,
      extraTaxPresets: [...next, { label, ratePct: preset.ratePct }],
    })
  }, [])

  const createFromDraft = useCallback((draft: InvoiceDraft, status: InvoiceStatus = 'pending') => {
    const recordId = crypto.randomUUID()
    const next: InvoiceRecord = { recordId, status, draft }
    setMemory({
      ...memory,
      invoices: [next, ...memory.invoices],
    })
    return recordId
  }, [])

  const updateDraft = useCallback((recordId: string, draft: InvoiceDraft) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map((i) => (i.recordId === recordId ? { ...i, draft } : i)),
    })
  }, [])

  const updateStatus = useCallback((recordId: string, status: InvoiceStatus) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map((i) => (i.recordId === recordId ? { ...i, status } : i)),
    })
  }, [])

  const deleteInvoice = useCallback((recordId: string) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.filter((i) => i.recordId !== recordId),
    })
  }, [])

  const duplicateInvoice = useCallback((recordId: string) => {
    const src = memory.invoices.find((i) => i.recordId === recordId)
    if (!src) return null
    const newId = crypto.randomUUID()
    const norm = normalizeInvoiceDraft(src.draft as unknown)
    const copy: InvoiceRecord = {
      recordId: newId,
      status: 'draft',
      draft: {
        ...norm,
        invoiceNumber: `INV-${Date.now().toString(36).toUpperCase()}`,
        lineItems: norm.lineItems.map((li) => ({ ...li, id: crypto.randomUUID() })),
      },
    }
    setMemory({
      ...memory,
      invoices: [copy, ...memory.invoices],
    })
    return newId
  }, [])

  const markSent = useCallback((recordId: string, draft: InvoiceDraft) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map((i) =>
        i.recordId === recordId ? { ...i, status: 'pending' as const, draft } : i,
      ),
    })
  }, [])

  const markPaid = useCallback((recordId: string) => {
    updateStatus(recordId, 'paid')
  }, [updateStatus])

  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted())
  }, [])

  const value = useMemo<InvoiceStoreValue>(
    () => ({
      invoices: data.invoices,
      clients: data.clients,
      extraProducts: data.extraProducts,
      extraBankLabels: data.extraBankLabels,
      extraPaymentMethods: data.extraPaymentMethods,
      extraTaxPresets: data.extraTaxPresets,
      getInvoice,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteInvoice,
      duplicateInvoice,
      addClient,
      addProduct,
      addBankLabel,
      addPaymentMethod,
      addTaxPreset,
      markSent,
      markPaid,
      resetToSeed,
    }),
    [
      data.invoices,
      data.clients,
      data.extraProducts,
      data.extraBankLabels,
      data.extraPaymentMethods,
      data.extraTaxPresets,
      getInvoice,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteInvoice,
      duplicateInvoice,
      addClient,
      addProduct,
      addBankLabel,
      addPaymentMethod,
      addTaxPreset,
      markSent,
      markPaid,
      resetToSeed,
    ],
  )

  return <InvoiceStoreContext.Provider value={value}>{children}</InvoiceStoreContext.Provider>
}

export function useInvoiceStore() {
  const ctx = useContext(InvoiceStoreContext)
  if (!ctx) throw new Error('useInvoiceStore must be used within InvoiceStoreProvider')
  return ctx
}
