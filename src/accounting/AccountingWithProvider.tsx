import { Routes, Route } from 'react-router-dom'
import { ToastProvider, useToast } from '@/lib/ToastContext'
import { Toaster } from '@citron-systems/citron-ui'
import AccountingLayout from './AccountingLayout'
import InvoicesHome from './InvoicesHome'
import SmartInvoiceBuilder from './SmartInvoiceBuilder'
import InvoiceEditorPage from './InvoiceEditorPage'

function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast()
  return (
    <>
      <Routes>
        <Route element={<AccountingLayout />}>
          <Route index element={<InvoicesHome />} />
          <Route path="create" element={<SmartInvoiceBuilder />} />
          <Route path="editor" element={<InvoiceEditorPage />} />
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
      <AccountingWithToaster />
    </ToastProvider>
  )
}
