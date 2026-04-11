/**
 * Loading placeholders that mirror AccountingLayout, InvoicesHome, and invoice form pages.
 * Uses project animate-shimmer (see index.css).
 */

/** Keep in sync with InvoicesHome table grid. */
const INVOICE_LIST_GRID =
  'grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5'

function Sk({ className = '' }: { className?: string }) {
  return <div className={`rounded-md animate-shimmer ${className}`} aria-hidden />
}

export function AccountingLayoutHeaderSkeleton() {
  return (
    <header className="flex shrink-0 flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:px-6 md:py-4 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
        <Sk className="h-8 w-8 shrink-0 rounded-lg" />
        <div className="min-w-0 flex-1 space-y-2 py-0.5">
          <Sk className="h-4 w-32 max-w-[55%]" />
          <Sk className="h-2.5 w-full max-w-[min(100%,280px)]" />
        </div>
      </div>
      <div className="flex min-w-0 flex-wrap items-center justify-start gap-2 sm:justify-end">
        <Sk className="h-8 w-8 shrink-0 rounded-lg" />
      </div>
    </header>
  )
}

export function InvoicesHomeSkeleton() {
  return (
    <div className="w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border">
      <div className="mb-5 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-3 sm:p-4 shadow-[var(--inkblot-shadow-sm)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-xl space-y-2">
            <Sk className="h-4 w-16" />
            <Sk className="h-10 w-full rounded-[var(--inkblot-radius-md)]" />
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 lg:shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Sk key={i} className="h-8 w-[3.25rem] sm:w-14 rounded-[var(--inkblot-radius-md)]" />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <Sk className="h-4 w-36" />
      </div>

      <div className="glass rounded-xl overflow-hidden w-full min-w-0">
        <div className="overflow-x-auto touch-scroll-x touch-pan-x">
          <div className="min-w-[780px]">
            <div
              className={`${INVOICE_LIST_GRID} py-2.5 sm:py-3 border-b border-border`}
            >
              <Sk className="h-3 w-4 justify-self-center" />
              <Sk className="h-3 w-12 justify-self-center" />
              <Sk className="h-3 w-10 justify-self-center" />
              <Sk className="h-3 w-14 justify-self-center" />
              <Sk className="h-3 w-12 justify-self-center" />
              <Sk className="h-3 w-9 justify-self-center" />
              <Sk className="h-3 w-4 justify-self-center opacity-0" />
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`${INVOICE_LIST_GRID} py-2.5 sm:py-3 min-h-[48px] sm:min-h-[52px] border-b border-border/50`}
              >
                <Sk className="h-3.5 w-4 justify-self-center" />
                <Sk className="h-4 w-[70%] max-w-full justify-self-center" />
                <Sk className="h-3.5 w-[80%] max-w-full justify-self-center" />
                <Sk className="h-4 w-14 justify-self-center" />
                <Sk className="h-5 w-16 rounded-full justify-self-center" />
                <Sk className="h-3.5 w-20 justify-self-center" />
                <Sk className="h-6 w-6 rounded-md justify-self-center" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function AccountingModuleSuspenseFallback() {
  return (
    <div
      className="h-full flex min-h-0 w-full max-w-full overflow-hidden"
      role="status"
      aria-busy="true"
      aria-label="Loading accounting"
    >
      <span className="sr-only">Loading accounting</span>
      <div className="flex-1 flex flex-col min-w-0 max-w-full">
        <AccountingLayoutHeaderSkeleton />
        <div className="flex-1 min-h-0 overflow-hidden">
          <InvoicesHomeSkeleton />
        </div>
      </div>
    </div>
  )
}

function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Sk className="h-3 w-20" />
      <Sk className="h-10 w-full rounded-[var(--inkblot-radius-md)]" />
    </div>
  )
}

function LineItemCardSkeleton() {
  return (
    <div className="rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-4)] space-y-3">
      <div className="flex justify-end">
        <Sk className="h-8 w-8 rounded-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]">
        <div className="md:col-span-2">
          <FormFieldSkeleton />
        </div>
        <FormFieldSkeleton />
        <FormFieldSkeleton />
      </div>
    </div>
  )
}

function InvoiceDocumentCardSkeleton() {
  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] space-y-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between border-b border-[var(--inkblot-semantic-color-border-default)] pb-[var(--inkblot-spacing-4)]">
        <div className="space-y-2 min-w-0">
          <Sk className="h-3 w-14" />
          <Sk className="h-4 w-24 max-w-full" />
        </div>
        <div className="space-y-2 sm:text-right">
          <Sk className="h-3 w-28 max-w-full sm:ml-auto" />
          <Sk className="h-3 w-32 max-w-full sm:ml-auto" />
        </div>
      </div>
      <div className="py-[var(--inkblot-spacing-4)] space-y-2">
        <Sk className="h-4 w-full max-w-[240px]" />
        <Sk className="h-3 w-full max-w-[280px]" />
        <Sk className="h-3 w-48 pt-1" />
      </div>
      <div className="border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline">
            <Sk className="h-3.5 w-[55%]" />
            <Sk className="h-3.5 w-32 sm:w-36" />
          </div>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`t-${i}`} className="flex justify-between pt-1 first:pt-0">
            <Sk className="h-3 w-20" />
            <Sk className="h-3 w-16" />
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--inkblot-semantic-color-border-default)] mt-[var(--inkblot-spacing-4)] pt-[var(--inkblot-spacing-4)] flex flex-wrap justify-between items-baseline gap-2">
        <Sk className="h-4 w-12" />
        <Sk className="h-6 w-28" />
      </div>
    </div>
  )
}

export type InvoiceFormSkeletonVariant = 'create' | 'edit'

export function InvoiceFormPageSkeleton({ variant }: { variant: InvoiceFormSkeletonVariant }) {
  const actionCount = variant === 'create' ? 2 : 7

  return (
    <div
      className="h-full min-w-0 max-w-full overflow-y-auto hide-scrollbar pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] print:h-auto"
      role="status"
      aria-busy="true"
      aria-label="Loading invoice"
    >
      <span className="sr-only">Loading invoice</span>
      <div className="max-w-[1280px] mx-auto w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-8 sm:pb-12 box-border print:px-0 print:py-0 print:max-w-none">
        <header className="mb-5 sm:mb-6 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 min-w-0 print:hidden">
          <Sk className="h-10 w-10 rounded-lg shrink-0" />
          <Sk className="h-7 w-48 max-w-[60%] rounded-md" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] gap-6 sm:gap-8 lg:gap-8 items-start print:block">
          <div className="space-y-5 sm:space-y-6 min-w-0 print:hidden">
            <section className="rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] space-y-[var(--inkblot-spacing-5)]">
              {variant === 'create' ? (
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md">
                  <FormFieldSkeleton />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]">
                  <div className="sm:max-w-md">
                    <FormFieldSkeleton />
                  </div>
                  <div className="sm:max-w-md">
                    <FormFieldSkeleton />
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Sk className="h-4 w-24" />
                  <Sk className="h-8 w-8 rounded-md shrink-0" />
                </div>
                <LineItemCardSkeleton />
                <LineItemCardSkeleton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <FormFieldSkeleton key={i} />
                ))}
              </div>

              <div>
                <FormFieldSkeleton />
                <Sk className="h-20 w-full mt-2 rounded-[var(--inkblot-radius-md)]" />
              </div>
            </section>

            <section className="rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]">
              <Sk className="h-4 w-32 mb-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]">
                <FormFieldSkeleton />
                <FormFieldSkeleton />
              </div>
              <div className="max-w-md">
                <FormFieldSkeleton />
              </div>
            </section>

            <div className="flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center sm:justify-end gap-2 sm:gap-3 pt-2">
              {Array.from({ length: actionCount }).map((_, i) => (
                <Sk
                  key={i}
                  className={`h-10 rounded-[var(--inkblot-radius-lg)] ${variant === 'create' ? 'w-full sm:w-40' : 'w-full sm:w-[7.5rem]'}`}
                />
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-4 w-full min-w-0 max-w-xl lg:max-w-none mx-auto lg:mx-0 space-y-3 print:max-w-none print:mx-0">
            <div className="flex items-center justify-between gap-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-3 py-2.5 print:hidden">
              <Sk className="h-4 w-24 min-w-0 flex-1 max-w-[70%]" />
              <Sk className="h-8 w-12 rounded-md shrink-0" />
            </div>
            <InvoiceDocumentCardSkeleton />
          </aside>
        </div>
      </div>
    </div>
  )
}
