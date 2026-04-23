/**
 * BrandingProfilesHome — a compact card grid of branding profiles with actions
 * to create, edit, duplicate, delete, and pick the default. The editor for an
 * individual profile lives in BrandingProfileEditor.tsx.
 */

import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Star } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import { accountingPath } from './accountingConstants'
import { useBrandingStore } from './brandingStore'
import type { BrandingProfile } from './brandingProfile.types'

export default function BrandingProfilesHome() {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const { profiles, defaultProfileId, createProfile, deleteProfile, setDefaultProfile } =
    useBrandingStore()

  const handleNew = useCallback(() => {
    const id = createProfile({ name: 'New brand' })
    navigate(accountingPath(`brands/${id}`))
  }, [createProfile, navigate])

  const handleDelete = useCallback(
    (p: BrandingProfile) => {
      if (profiles.length <= 1) {
        addToast({ title: 'Cannot delete', description: 'Keep at least one brand profile.', variant: 'error' })
        return
      }
      const ok = typeof window === 'undefined' ? true : window.confirm(`Delete profile "${p.name}"?`)
      if (!ok) return
      deleteProfile(p.id)
      addToast({ title: 'Deleted', description: `"${p.name}" removed.`, variant: 'success' })
    },
    [profiles.length, deleteProfile, addToast],
  )

  const handleSetDefault = useCallback(
    (p: BrandingProfile) => {
      setDefaultProfile(p.id)
      addToast({ title: 'Default brand', description: `"${p.name}" is now the default.`, variant: 'success' })
    },
    [setDefaultProfile, addToast],
  )

  return (
    <div className="h-full w-full overflow-y-auto hide-scrollbar px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-3 sm:p-4 shadow-[var(--inkblot-shadow-sm)]">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">Branding profiles</h2>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Logo, colors, sender and banking details applied to your offers and invoices.
          </p>
        </div>
        <button
          type="button"
          onClick={handleNew}
          className="inline-flex h-8 items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Plus className="h-3.5 w-3.5" aria-hidden /> New brand
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {profiles.map((p) => {
          const isDefault = defaultProfileId === p.id
          return (
            <article
              key={p.id}
              className="group relative flex flex-col gap-3 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-4 shadow-[var(--inkblot-shadow-sm)]"
            >
              <header className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border"
                    style={{ backgroundColor: p.accentColor }}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{p.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {p.brandName || '—'}
                    </p>
                  </div>
                </div>
                {isDefault ? (
                  <span
                    className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-citrus-lemon"
                    title="Default brand for new offers"
                  >
                    <Star className="h-3 w-3" aria-hidden /> Default
                  </span>
                ) : null}
              </header>

              <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-1 text-[11px]">
                {p.brandWebsite ? (
                  <>
                    <dt className="uppercase tracking-wider text-muted-foreground">Site</dt>
                    <dd className="font-mono text-citrus-lemon truncate">{p.brandWebsite}</dd>
                  </>
                ) : null}
                {p.senderLegalName ? (
                  <>
                    <dt className="uppercase tracking-wider text-muted-foreground">Legal</dt>
                    <dd className="truncate">{p.senderLegalName}</dd>
                  </>
                ) : null}
                {p.senderVatId ? (
                  <>
                    <dt className="uppercase tracking-wider text-muted-foreground">VAT</dt>
                    <dd className="font-mono">{p.senderVatId}</dd>
                  </>
                ) : null}
              </dl>

              <footer className="mt-auto flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/60">
                <Link
                  to={accountingPath(`brands/${p.id}`)}
                  className="inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/70"
                >
                  Edit
                </Link>
                {!isDefault ? (
                  <button
                    type="button"
                    onClick={() => handleSetDefault(p)}
                    className="inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/70"
                  >
                    Set default
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => handleDelete(p)}
                  className="ml-auto inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-destructive hover:border-destructive/40"
                >
                  Delete
                </button>
              </footer>
            </article>
          )
        })}
      </div>
    </div>
  )
}
