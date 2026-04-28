/**
 * Shared toolbar / header control styles — parity with Contacts & Marketing modules.
 * Header icon actions are standardized at 32×32 px (h-8 w-8), rounded-lg.
 */

export const CRM_HEADER_BTN_BASE =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-150 ease-out focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border focus-visible:ring-offset-0 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50'

/** Primary icon action (+ add, etc.) */
export const CRM_HEADER_BTN_PRIMARY =
  `${CRM_HEADER_BTN_BASE} bg-accent text-accent-foreground hover:bg-accent/90`

/** Neutral icon button — flat, no heavy border */
export const CRM_HEADER_BTN_SECONDARY =
  `${CRM_HEADER_BTN_BASE} bg-background text-muted-foreground hover:bg-muted/70 dark:bg-card dark:hover:bg-muted/50`

/** Filter trigger — borderless, neutral; accent tint when filters apply */
export function crmHeaderBtnFilter(active: boolean): string {
  return `${CRM_HEADER_BTN_BASE} ${
    active
      ? 'text-accent bg-accent/10 hover:bg-accent/15'
      : 'text-muted-foreground hover:bg-muted/60'
  }`
}

/** Compact list/offers toolbar strip — flat, light separation */
export const CRM_TOOLBAR_SURFACE =
  'rounded-xl border border-border/50 bg-muted/15 px-2.5 py-2 dark:bg-muted/10'

/** SearchBar wrapper: compact control height (~36px) aligned with 32px icons */
export const CRM_TOOLBAR_SEARCH_WRAP =
  '[&_input]:min-h-[36px] [&_input]:h-9 [&_input]:rounded-lg [&_input]:border-border/60 [&_input]:bg-background dark:[&_input]:bg-card'

/** Segmented section tabs (layout rail) */
export const CRM_SEGMENT_TRACK =
  'inline-flex items-center gap-0.5 rounded-lg border border-border/50 bg-muted/20 p-0.5 dark:bg-muted/15'

export function crmSegmentTab(active: boolean): string {
  return `inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${
    active
      ? 'bg-background text-foreground shadow-sm dark:bg-card'
      : 'text-muted-foreground hover:bg-background/70 hover:text-foreground dark:hover:bg-card/80'
  }`
}

/** Inline filter chips (status pills) — lightweight, flat */
export function crmFilterChip(active: boolean): string {
  return `rounded-md px-2 py-1 text-[11px] font-medium leading-tight transition-colors duration-150 ${
    active
      ? 'bg-background text-foreground shadow-sm dark:bg-card'
      : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
  }`
}

/** Content panels — soft, minimal elevation */
export const CRM_PANEL_SURFACE =
  'rounded-xl border border-border/60 bg-background shadow-none dark:bg-card'
