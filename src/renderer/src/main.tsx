import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterView from './router-view'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterView />
  </StrictMode>
)
