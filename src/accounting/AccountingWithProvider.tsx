import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastProvider, useToast } from '@/lib/ToastContext'
import { ModuleErrorBoundary, Toaster } from '@citron-systems/citron-ui'
import AccountingLayout from './AccountingLayout'
import { InvoiceFormPageSkeleton, InvoicesHomeSkeleton } from './AccountingSkeletons'
import { InvoiceStoreProvider } from './invoiceStore'
import { OfferStoreProvider } from './offerStore'
import { BrandingStoreProvider } from './brandingStore'

const InvoicesHome = lazy(() => import('./InvoicesHome'))
const SmartInvoiceBuilder = lazy(() => import('./SmartInvoiceBuilder'))
const InvoiceReviewPage = lazy(() => import('./InvoiceReviewPage'))
const OffersHome = lazy(() => import('./OffersHome'))
const OfferBuilder = lazy(() => import('./OfferBuilder'))
const BrandingProfilesHome = lazy(() => import('./BrandingProfilesHome'))
const BrandingProfileEditor = lazy(() => import('./BrandingProfileEditor'))

function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast()
  return (
    <>
      <Routes>
        <Route
          element={
            <ModuleErrorBoundary className="h-full min-h-[200px]">
              <AccountingLayout />
            </ModuleErrorBoundary>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<InvoicesHomeSkeleton />}>
                <InvoicesHome />
              </Suspense>
            }
          />
          <Route
            path="create"
            element={
              <Suspense fallback={<InvoiceFormPageSkeleton variant="create" />}>
                <SmartInvoiceBuilder />
              </Suspense>
            }
          />
          <Route
            path="editor/:recordId"
            element={
              <Suspense fallback={<InvoiceFormPageSkeleton variant="edit" />}>
                <InvoiceReviewPage />
              </Suspense>
            }
          />
          <Route
            path="offers"
            element={
              <Suspense fallback={<InvoicesHomeSkeleton />}>
                <OffersHome />
              </Suspense>
            }
          />
          <Route
            path="offers/:recordId"
            element={
              <Suspense fallback={<InvoiceFormPageSkeleton variant="edit" />}>
                <OfferBuilder />
              </Suspense>
            }
          />
          <Route
            path="brands"
            element={
              <Suspense fallback={<InvoicesHomeSkeleton />}>
                <BrandingProfilesHome />
              </Suspense>
            }
          />
          <Route
            path="brands/:id"
            element={
              <Suspense fallback={<InvoiceFormPageSkeleton variant="edit" />}>
                <BrandingProfileEditor />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster
        toasts={toasts}
        position="bottom-right"
        onDismiss={dismissToast}
        className="fixed z-[100] max-w-[calc(100vw-1.5rem)] sm:max-w-none bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(0.75rem,env(safe-area-inset-right,0px))] sm:bottom-4 sm:right-4 left-auto"
      />
    </>
  )
}

export default function AccountingWithProvider() {
  return (
    <ToastProvider>
      <BrandingStoreProvider>
        <InvoiceStoreProvider>
          <OfferStoreProvider>
            <AccountingWithToaster />
          </OfferStoreProvider>
        </InvoiceStoreProvider>
      </BrandingStoreProvider>
    </ToastProvider>
  )
}
