import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AccountingModuleSuspenseFallback } from '@/accounting/AccountingSkeletons'

const AccountingWithProvider = lazy(() => import('@/accounting/AccountingWithProvider'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" replace />} />
        <Route
          path="/invoices/*"
          element={
            <Suspense fallback={<AccountingModuleSuspenseFallback />}>
              <AccountingWithProvider />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/invoices" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
