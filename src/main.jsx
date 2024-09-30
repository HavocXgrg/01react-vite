import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'
import BgChanger from './Components/BgChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BgChanger />
  </StrictMode>,
)
