import { Navigate, useLocation } from 'react-router-dom'
import { Routes } from '@/main/routes'
import { ScrollTop } from '@/main/scroll-top'

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
