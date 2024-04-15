import { useRoutes } from 'react-router-dom'
import { appRoutes, mainRoutes } from '.'

const Routes = () => {
  const routesApp = appRoutes()
  const routesMain = mainRoutes()
  return useRoutes([routesApp, routesMain])
}

export { Routes }
