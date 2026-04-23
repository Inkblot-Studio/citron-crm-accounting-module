/**
 * BrandingProfileEditor — single-profile form.
 *
 * Sections:
 *   1. Identity      — profile name, logo (public file or URL), brand mark, tagline, website
 *   2. Accent color  — HTML5 color picker + hex input (synced)
 *   3. Sender        — legal name, address, VAT, phone, email
 *   4. Banking       — bank name, IBAN, BIC
 *
 * Changes are auto-saved to the store (debounced).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import { accountingPath } from './accountingConstants'
import { useBrandingStore } from './brandingStore'
import { resolveBrandingLogoSrc } from './brandingResolvedLogos'
import { emptyBrandingProfile, normalizeHex, type BrandingProfile } from './brandingProfile.types'

const labelCls = 'text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground'
const inputCls =
  'min-h-[34px] w-full rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]'
const textareaCls =
  'min-h-[76px] w-full rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]'
const sectionCls =
  'rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 flex flex-col gap-4'

export default function BrandingProfileEditor() {
  const navigate = useNavigate()
  const { id: routeId } = useParams<{ id?: string }>()
  const { addToast } = useToast()
  const { profiles, getProfile, updateProfile, deleteProfile } = useBrandingStore()

  const profile = useMemo(
    () => (routeId ? getProfile(routeId) : undefined),
    [routeId, getProfile],
  )

  const [draft, setDraft] = useState<BrandingProfile>(() => profile ?? emptyBrandingProfile())

  // Load from store when the target profile changes.
  const hydratedForRef = useRef<string | null>(null)
  useEffect(() => {
    if (!profile) return
    if (hydratedForRef.current === profile.id) return
    setDraft(profile)
    hydratedForRef.current = profile.id
  }, [profile])

  // Redirect if the profile is missing.
  useEffect(() => {
    if (routeId && !profile) {
      navigate(accountingPath('brands'), { replace: true })
    }
  }, [routeId, profile, navigate])

  // Debounced commit to store.
  const commitRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (!profile) return
    if (commitRef.current) clearTimeout(commitRef.current)
    commitRef.current = setTimeout(() => updateProfile(profile.id, draft), 200)
    return () => {
      if (commitRef.current) clearTimeout(commitRef.current)
    }
  }, [draft, profile, updateProfile])

  const patch = useCallback((p: Partial<BrandingProfile>) => {
    setDraft((d) => ({ ...d, ...p }))
  }, [])

  const handleDelete = useCallback(() => {
    if (!profile) return
    if (profiles.length <= 1) {
      addToast({ title: 'Cannot delete', description: 'Keep at least one brand profile.', variant: 'error' })
      return
    }
    const ok = typeof window === 'undefined' ? true : window.confirm(`Delete profile "${profile.name}"?`)
    if (!ok) return
    deleteProfile(profile.id)
    addToast({ title: 'Deleted', description: `"${profile.name}" removed.`, variant: 'success' })
    navigate(accountingPath('brands'))
  }, [profile, profiles.length, deleteProfile, navigate, addToast])

  if (!profile) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    )
  }

  const logoPreviewSrc = resolveBrandingLogoSrc(draft)

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to={accountingPath('brands')}
            aria-label="Back to brands"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-background/70"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
          <p className="truncate text-xs text-muted-foreground">
            <span className="text-foreground font-semibold">{draft.name || 'Untitled brand'}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-medium text-destructive transition-colors hover:border-destructive/40"
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden /> Delete
        </button>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 py-5 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-[760px] flex-col gap-4">
          {/* Identity */}
          <section className={sectionCls}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Identity</h3>

            <Field label="Profile name">
              <input
                className={inputCls}
                value={draft.name}
                onChange={(e) => patch({ name: e.target.value })}
                placeholder="e.g. Inkblot Studio"
              />
            </Field>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Brand mark">
                <input
                  className={inputCls}
                  value={draft.brandName}
                  onChange={(e) => patch({ brandName: e.target.value })}
                  placeholder="INKBLOT STUDIO"
                />
              </Field>
              <Field label="Tagline">
                <input
                  className={inputCls}
                  value={draft.brandTagline}
                  onChange={(e) => patch({ brandTagline: e.target.value })}
                  placeholder="Accelerating Every Industry through AI"
                />
              </Field>
            </div>

            <Field
              label="Logo file"
              hint="Path from the site root to a file in public/, e.g. /svg/inkblotstudio_logo.svg. Built-in paths for this module are bundled (Module Federation–safe). Others need the host to serve the same file or set VITE_ACCOUNTING_PUBLIC_ORIGIN."
            >
              <input
                className={`${inputCls} font-mono text-[13px]`}
                value={draft.logoAssetPath ?? ''}
                onChange={(e) => patch({ logoAssetPath: e.target.value })}
                placeholder="/svg/your_logo.svg"
              />
            </Field>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Website">
                <input
                  className={inputCls}
                  value={draft.brandWebsite}
                  onChange={(e) => patch({ brandWebsite: e.target.value })}
                  placeholder="inkblotstudio.eu"
                />
              </Field>
              <Field
                label="Logo URL (optional)"
                hint="https:// or data: URI if you are not using a file under public/."
              >
                <input
                  className={inputCls}
                  type="text"
                  inputMode="url"
                  autoComplete="off"
                  value={draft.logoUrl ?? ''}
                  onChange={(e) => patch({ logoUrl: e.target.value })}
                  placeholder="https://…"
                />
              </Field>
            </div>

            {logoPreviewSrc ? (
              <div className="flex items-center gap-3 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-3">
                <img
                  src={logoPreviewSrc}
                  alt="Logo preview"
                  className="h-10 w-auto max-w-[120px] object-contain"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />
                <span className="text-[11px] text-muted-foreground">Logo preview</span>
              </div>
            ) : null}
          </section>

          {/* Accent color */}
          <section className={sectionCls}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Accent</h3>
            <Field
              label="Color"
              hint="Applied to document numbers, section markers, and the comparison label."
            >
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={normalizeHex(draft.accentColor)}
                  onChange={(e) => patch({ accentColor: e.target.value })}
                  aria-label="Accent color"
                  className="h-9 w-12 cursor-pointer rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)]"
                />
                <input
                  type="text"
                  value={draft.accentColor}
                  onChange={(e) => patch({ accentColor: e.target.value })}
                  className={`${inputCls} !w-[160px] font-mono uppercase`}
                  placeholder="#C9A227"
                  maxLength={7}
                />
                <div
                  aria-hidden
                  className="ml-auto h-9 w-28 rounded-md border border-border"
                  style={{ backgroundColor: normalizeHex(draft.accentColor) }}
                />
              </div>
            </Field>
          </section>

          {/* Sender */}
          <section className={sectionCls}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Sender</h3>

            <Field label="Legal name">
              <input
                className={inputCls}
                value={draft.senderLegalName}
                onChange={(e) => patch({ senderLegalName: e.target.value })}
                placeholder="Inkblot Studio Ltd."
              />
            </Field>

            <Field label="Address" hint="Multi-line; line breaks are preserved.">
              <textarea
                className={textareaCls}
                value={draft.senderAddress}
                onChange={(e) => patch({ senderAddress: e.target.value })}
                placeholder="ul. Shipka 12&#10;1000 Sofia, Bulgaria"
                rows={3}
              />
            </Field>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="VAT / Tax ID">
                <input
                  className={`${inputCls} font-mono`}
                  value={draft.senderVatId}
                  onChange={(e) => patch({ senderVatId: e.target.value })}
                  placeholder="BG123456789"
                />
              </Field>
              <Field label="Phone">
                <input
                  className={inputCls}
                  type="tel"
                  value={draft.senderPhone}
                  onChange={(e) => patch({ senderPhone: e.target.value })}
                  placeholder="+359 2 123 4567"
                />
              </Field>
              <Field label="Email">
                <input
                  className={inputCls}
                  type="email"
                  value={draft.senderEmail}
                  onChange={(e) => patch({ senderEmail: e.target.value })}
                  placeholder="hello@yourbrand.com"
                />
              </Field>
            </div>
          </section>

          {/* Banking */}
          <section className={sectionCls}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Banking</h3>
            <p className="text-[11px] text-muted-foreground">
              Used on invoices. Leave blank if not applicable.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <Field label="Bank name">
                <input
                  className={inputCls}
                  value={draft.bankName}
                  onChange={(e) => patch({ bankName: e.target.value })}
                  placeholder="UniCredit Bulbank"
                />
              </Field>
              <Field label="IBAN">
                <input
                  className={`${inputCls} font-mono`}
                  value={draft.bankIban}
                  onChange={(e) => patch({ bankIban: e.target.value })}
                  placeholder="BG80UNCR70001523456789"
                />
              </Field>
              <Field label="BIC / SWIFT">
                <input
                  className={`${inputCls} font-mono sm:!w-[140px]`}
                  value={draft.bankBic}
                  onChange={(e) => patch({ bankBic: e.target.value })}
                  placeholder="UNCRBGSF"
                />
              </Field>
            </div>
          </section>

          <div className="h-4" aria-hidden />
        </div>
      </form>
    </div>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelCls}>{label}</span>
      {children}
      {hint ? <span className="text-[10px] text-muted-foreground">{hint}</span> : null}
    </label>
  )
}
