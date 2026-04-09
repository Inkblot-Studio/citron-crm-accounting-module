import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AccountingWithProvider = lazy(() => import('@/accounting/AccountingWithProvider'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="h-full w-full animate-pulse bg-surface-1" />}>
              <AccountingWithProvider />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
