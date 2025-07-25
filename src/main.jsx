import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UndoProvider } from './UndoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UndoProvider>
      <App />
    </UndoProvider>
  </StrictMode>,
)
