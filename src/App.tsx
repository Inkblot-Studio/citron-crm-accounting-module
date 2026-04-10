import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const AccountingWithProvider = lazy(() => import('@/accounting/AccountingWithProvider'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" replace />} />
        <Route
          path="/invoices/*"
          element={
            <Suspense fallback={<div className="h-full w-full animate-pulse bg-surface-1" />}>
              <AccountingWithProvider />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/invoices" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
