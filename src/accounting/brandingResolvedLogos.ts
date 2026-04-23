/**
 * Resolves branding logo paths to a value that works as `<img src>`.
 *
 * Root-relative paths like `/svg/…` break when this remote is embedded via
 * Module Federation: the browser resolves them against the *host* page
 * origin, not the accounting bundle’s server. Known logos are bundled with
 * `?raw` and turned into data URIs. Other paths can use
 * `VITE_ACCOUNTING_PUBLIC_ORIGIN` so `/svg/foo.svg` becomes an absolute URL.
 */

import type { BrandingProfile } from './brandingProfile.types'
import inkblotSvgRaw from '@/assets/branding/inkblotstudio_logo.svg?raw'

function svgRawToDataUri(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const inkblotDataUri = svgRawToDataUri(inkblotSvgRaw)

/** `logoAssetPath` values that ship inside this module (MF-safe). */
const BUNDLED_LOGO_BY_ASSET_PATH: Record<string, string> = {
  '/svg/inkblotstudio_logo.svg': inkblotDataUri,
}

function accountingPublicOrigin(): string {
  const raw = import.meta.env.VITE_ACCOUNTING_PUBLIC_ORIGIN
  if (typeof raw !== 'string') return ''
  return raw.replace(/\/$/, '')
}

export function resolveBrandingLogoSrc(
  p: Pick<BrandingProfile, 'logoAssetPath' | 'logoUrl'> | undefined,
): string {
  if (!p) return ''
  const asset = typeof p.logoAssetPath === 'string' ? p.logoAssetPath.trim() : ''
  if (asset.startsWith('/')) {
    const bundled = BUNDLED_LOGO_BY_ASSET_PATH[asset]
    if (bundled) return bundled
    const origin = accountingPublicOrigin()
    if (origin) return `${origin}${asset}`
    return asset
  }
  const url = typeof p.logoUrl === 'string' ? p.logoUrl.trim() : ''
  return url
}
