import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './app'
import '@/presentation/scss/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>,
)
