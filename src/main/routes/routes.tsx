import { useRoutes } from 'react-router-dom'
import { makeLogin, makeSignUp } from '@/main/factory/pages'
import { appRoutes, mainRoutes } from '.'

const Routes = () => {
  const routesApp = appRoutes({ makeLogin, makeSignUp })
  const routesMain = mainRoutes()
  return useRoutes([routesApp, routesMain])
}

export { Routes }
