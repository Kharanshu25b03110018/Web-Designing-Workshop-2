import { StrictMode } from 'react'  // strict mode is the library which is presented in react
import { createRoot } from 'react-dom/client'   //create root 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,    // , is important to separate the components
)
