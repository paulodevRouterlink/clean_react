import { useRoutes } from 'react-router-dom'
import { appRoutes, signUp } from './app.routes'

const Routes = () => {
  const mainRoutes = appRoutes()
  const authSignUp = signUp()

  return useRoutes([mainRoutes, authSignUp])
}

export { Routes }
