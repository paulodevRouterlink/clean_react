import { useRoutes } from 'react-router-dom'
import { appRoutes } from './app.routes'

const Routes = () => {
  const mainRoutes = appRoutes()

  return useRoutes([mainRoutes])
}

export { Routes }
