import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create the root element to render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the main App component */}
    <App />
  </StrictMode>,
)