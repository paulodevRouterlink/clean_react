import { Navigate, useLocation } from 'react-router-dom'
import { Routes, ScrollTop } from '@/config'

const App = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/login" />

  return (
    <ScrollTop>
      <Routes />
    </ScrollTop>
  )
}

export { App }
