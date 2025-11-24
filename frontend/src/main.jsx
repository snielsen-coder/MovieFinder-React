import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './css/index.css'
import App from './App.jsx'

// Notes: Main.jsx - this is where React app begins
// createRoot - through the react code into the root node

// Adding the react router
// stop vite (ctr z) and install the react router
// npm install react-router-dom -> adds it into the package.json and in the node_modules folder
// import above and add in the createRoot function below


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
