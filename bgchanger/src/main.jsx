import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tail from './tail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tail />
  </StrictMode>,
)
