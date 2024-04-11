import { useRoutes } from 'react-router-dom'
import { appRoutes } from './app.routes'
import { makeLogin } from '@/main/factory/pages'

const Routes = () => {
  const mainRoutes = appRoutes({ makeLogin })

  return useRoutes([mainRoutes])
}

export { Routes }
