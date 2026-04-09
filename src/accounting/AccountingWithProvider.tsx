import { ToastProvider, useToast } from '@/lib/ToastContext'
import { Toaster } from '@citron-systems/citron-ui'
import AccountingPage from './AccountingPage'

function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast()
  return (
    <>
      <AccountingPage />
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
