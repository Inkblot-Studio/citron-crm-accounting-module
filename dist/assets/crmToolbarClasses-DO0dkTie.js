const CRM_HEADER_BTN_BASE = "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-150 ease-out focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border focus-visible:ring-offset-0 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";
const CRM_HEADER_BTN_PRIMARY = `${CRM_HEADER_BTN_BASE} bg-accent text-accent-foreground hover:bg-accent/90`;
const CRM_HEADER_BTN_SECONDARY = `${CRM_HEADER_BTN_BASE} bg-background text-muted-foreground hover:bg-muted/70 dark:bg-card dark:hover:bg-muted/50`;
const CRM_TOOLBAR_SURFACE = "rounded-xl border border-border/50 bg-muted/15 px-2.5 py-2 dark:bg-muted/10";
const CRM_TOOLBAR_SEARCH_WRAP = "[&_input]:min-h-[36px] [&_input]:h-9 [&_input]:rounded-lg [&_input]:border-border/60 [&_input]:bg-background dark:[&_input]:bg-card";
const CRM_SEGMENT_TRACK = "inline-flex items-center gap-0.5 rounded-lg border border-border/50 bg-muted/20 p-0.5 dark:bg-muted/15";
function crmSegmentTab(active) {
  return `inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${active ? "bg-background text-foreground shadow-sm dark:bg-card" : "text-muted-foreground hover:bg-background/70 hover:text-foreground dark:hover:bg-card/80"}`;
}
function crmFilterChip(active) {
  return `rounded-md px-2 py-1 text-[11px] font-medium leading-tight transition-colors duration-150 ${active ? "bg-background text-foreground shadow-sm dark:bg-card" : "text-muted-foreground hover:bg-background/50 hover:text-foreground"}`;
}
const CRM_PANEL_SURFACE = "rounded-xl border border-border/60 bg-background shadow-none dark:bg-card";

export { CRM_SEGMENT_TRACK as C, CRM_HEADER_BTN_PRIMARY as a, CRM_TOOLBAR_SEARCH_WRAP as b, crmSegmentTab as c, crmFilterChip as d, CRM_HEADER_BTN_SECONDARY as e, CRM_PANEL_SURFACE as f, CRM_TOOLBAR_SURFACE as g };
