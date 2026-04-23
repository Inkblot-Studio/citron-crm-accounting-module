/**
 * Branding store — reactive, localStorage-backed registry of BrandingProfile.
 *
 * Source of truth hierarchy:
 *   1. localStorage (user edits)
 *   2. src/config/brandingProfiles.json (committed seed)
 *
 * On first load the JSON seed is copied into localStorage. A user deleting
 * every profile will have the seed re-applied next time.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import seedProfiles from '@/config/brandingProfiles.json'
import {
  emptyBrandingProfile,
  normalizeHex,
  type BrandingProfile,
} from './brandingProfile.types'

const STORAGE_KEY = 'citron-accounting-branding-v1'

interface PersistedShape {
  version: 1
  profiles: BrandingProfile[]
  /** ID of the profile that should be auto-applied to new offers. */
  defaultProfileId: string | null
}

function normalizeProfile(raw: unknown, fallbackId: string): BrandingProfile {
  const empty = emptyBrandingProfile()
  if (!raw || typeof raw !== 'object') return { ...empty, id: fallbackId }
  const r = raw as Record<string, unknown>
  const str = (v: unknown, d = ''): string => (typeof v === 'string' ? v : d)
  return {
    id: str(r.id, fallbackId),
    name: str(r.name, empty.name),
    logoAssetPath: str(r.logoAssetPath),
    logoUrl: str(r.logoUrl),
    brandName: str(r.brandName),
    brandTagline: str(r.brandTagline),
    brandWebsite: str(r.brandWebsite),
    accentColor: normalizeHex(r.accentColor),
    senderLegalName: str(r.senderLegalName),
    senderAddress: str(r.senderAddress),
    senderVatId: str(r.senderVatId),
    senderPhone: str(r.senderPhone),
    senderEmail: str(r.senderEmail),
    bankName: str(r.bankName),
    bankIban: str(r.bankIban),
    bankBic: str(r.bankBic),
  }
}

function seedFromJson(): BrandingProfile[] {
  return (seedProfiles as unknown[]).map((p, i) => normalizeProfile(p, `seed-${i}`))
}

function defaultPersisted(): PersistedShape {
  const profiles = seedFromJson()
  return {
    version: 1,
    profiles,
    defaultProfileId: profiles[0]?.id ?? null,
  }
}

function loadPersisted(): PersistedShape {
  if (typeof window === 'undefined') return defaultPersisted()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultPersisted()
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const profilesRaw = Array.isArray(parsed.profiles) ? parsed.profiles : []
    const profiles = profilesRaw.map((p, i) => normalizeProfile(p, `rec-${i}`))
    if (profiles.length === 0) return defaultPersisted()
    const defaultProfileId =
      typeof parsed.defaultProfileId === 'string' && profiles.some((p) => p.id === parsed.defaultProfileId)
        ? parsed.defaultProfileId
        : profiles[0]?.id ?? null
    return { version: 1, profiles, defaultProfileId }
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

if (typeof window !== 'undefined') {
  memory = loadPersisted()
}

/* ─── Public API ─────────────────────────────────────────────────────────── */

interface BrandingStoreValue {
  profiles: BrandingProfile[]
  defaultProfileId: string | null
  getProfile: (id: string | null | undefined) => BrandingProfile | undefined
  /** Returns the profile for `id`, or the default if id is null, or the first profile. */
  resolveProfile: (id: string | null | undefined) => BrandingProfile | undefined
  createProfile: (init?: Partial<BrandingProfile>) => string
  updateProfile: (id: string, patch: Partial<BrandingProfile>) => void
  deleteProfile: (id: string) => void
  setDefaultProfile: (id: string | null) => void
  resetToSeed: () => void
}

const BrandingStoreContext = createContext<BrandingStoreValue | null>(null)

export function BrandingStoreProvider({ children }: { children: ReactNode }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted())

  const getProfile = useCallback(
    (id: string | null | undefined) =>
      id ? data.profiles.find((p) => p.id === id) : undefined,
    [data.profiles],
  )

  const resolveProfile = useCallback(
    (id: string | null | undefined): BrandingProfile | undefined => {
      if (id) {
        const found = data.profiles.find((p) => p.id === id)
        if (found) return found
      }
      if (data.defaultProfileId) {
        const fallback = data.profiles.find((p) => p.id === data.defaultProfileId)
        if (fallback) return fallback
      }
      return data.profiles[0]
    },
    [data.profiles, data.defaultProfileId],
  )

  const createProfile = useCallback((init?: Partial<BrandingProfile>) => {
    const base = emptyBrandingProfile()
    const profile: BrandingProfile = { ...base, ...init, id: base.id }
    setMemory({
      ...memory,
      profiles: [...memory.profiles, profile],
    })
    return profile.id
  }, [])

  const updateProfile = useCallback((id: string, patch: Partial<BrandingProfile>) => {
    setMemory({
      ...memory,
      profiles: memory.profiles.map((p) =>
        p.id === id ? { ...p, ...patch, id: p.id, accentColor: normalizeHex(patch.accentColor ?? p.accentColor) } : p,
      ),
    })
  }, [])

  const deleteProfile = useCallback((id: string) => {
    const remaining = memory.profiles.filter((p) => p.id !== id)
    setMemory({
      ...memory,
      profiles: remaining,
      defaultProfileId:
        memory.defaultProfileId === id ? remaining[0]?.id ?? null : memory.defaultProfileId,
    })
  }, [])

  const setDefaultProfile = useCallback((id: string | null) => {
    setMemory({ ...memory, defaultProfileId: id })
  }, [])

  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted())
  }, [])

  const value = useMemo<BrandingStoreValue>(
    () => ({
      profiles: data.profiles,
      defaultProfileId: data.defaultProfileId,
      getProfile,
      resolveProfile,
      createProfile,
      updateProfile,
      deleteProfile,
      setDefaultProfile,
      resetToSeed,
    }),
    [data.profiles, data.defaultProfileId, getProfile, resolveProfile, createProfile, updateProfile, deleteProfile, setDefaultProfile, resetToSeed],
  )

  return <BrandingStoreContext.Provider value={value}>{children}</BrandingStoreContext.Provider>
}

export function useBrandingStore() {
  const ctx = useContext(BrandingStoreContext)
  if (!ctx) throw new Error('useBrandingStore must be used within BrandingStoreProvider')
  return ctx
}
