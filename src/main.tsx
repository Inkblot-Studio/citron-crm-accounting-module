import '@citron-systems/citron-ds/css'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { appClientDisplayName } from './config/appConfig'

if (typeof document !== 'undefined') {
  document.title = appClientDisplayName
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
