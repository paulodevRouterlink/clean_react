import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as ProviderRoutes } from 'react-router-dom'
import { App } from './app'
import '../presentation/scss/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderRoutes basename="/">
      <App />
    </ProviderRoutes>
  </React.StrictMode>,
)
