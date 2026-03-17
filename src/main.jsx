import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardFlipProps from './CardFlipProps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CardFlipProps/>
  </StrictMode>,
)
