/**
 * main.jsx
 *
 * Application bootstrap. This file imports global styles and mounts the React
 * application into the HTML element with id `root`.
 *
 * Edit this file to change the root-level wrappers (for example, to add a
 * router, context providers, or global error boundaries).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
