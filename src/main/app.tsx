import { Navigate, useLocation } from 'react-router-dom'
import { Routes } from '@/main/routes'
import { ScrollTop } from '@/main/scroll-top'
import { AppContext } from '@/presentation/contexts/api'
import { setCurrentAccountAdapter } from './adapters'

const App = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/signin" />

  return (
    <AppContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
      }}
    >
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </AppContext.Provider>
  )
}

export { App }
