import { useRoutes } from 'react-router-dom'
import { appRoutes } from './app.routes'
import { makeLogin, makeSignUp } from '@/main/factory/pages'

const Routes = () => {
  const mainRoutes = appRoutes({ makeLogin, makeSignUp })
  return useRoutes([mainRoutes])
}

export { Routes }
