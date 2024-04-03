import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../presentation/app'
import '../presentation/scss/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
