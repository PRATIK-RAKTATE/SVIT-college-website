import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 1️⃣  add this import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>            {/* 2️⃣  wrap App once */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)