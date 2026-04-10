import { Routes, Route } from 'react-router-dom'
import { ToastProvider, useToast } from '@/lib/ToastContext'
import { ModuleErrorBoundary, Toaster } from '@citron-systems/citron-ui'
import AccountingLayout from './AccountingLayout'
import InvoicesHome from './InvoicesHome'
import SmartInvoiceBuilder from './SmartInvoiceBuilder'
import InvoiceReviewPage from './InvoiceReviewPage'
import { InvoiceStoreProvider } from './invoiceStore'

function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast()
  return (
    <>
      <Routes>
        <Route
          path="/invoices"
          element={
            <ModuleErrorBoundary className="h-full min-h-[200px]">
              <AccountingLayout />
            </ModuleErrorBoundary>
          }
        >
          <Route index element={<InvoicesHome />} />
          <Route path="create" element={<SmartInvoiceBuilder />} />
          <Route path="editor/:recordId" element={<InvoiceReviewPage />} />
        </Route>
      </Routes>
      <Toaster
        toasts={toasts}
        position="bottom-right"
        onDismiss={dismissToast}
        className="fixed bottom-4 right-4 z-[100]"
      />
    </>
  )
}

export default function AccountingWithProvider() {
  return (
    <ToastProvider>
      <InvoiceStoreProvider>
        <AccountingWithToaster />
      </InvoiceStoreProvider>
    </ToastProvider>
  )
}
