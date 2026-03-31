import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HirePage from './HirePage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HirePage onBack={() => { window.location.href = 'https://yashlahoti.com' }} />
  </React.StrictMode>
)
