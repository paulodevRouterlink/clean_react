import { useRoutes } from 'react-router-dom'
import { appRoutes, signUp } from './app.routes'
import { makeLogin } from '../factory'

const Routes = () => {
  const mainRoutes = appRoutes({ makeLogin })
  const authSignUp = signUp()

  return useRoutes([mainRoutes, authSignUp])
}

export { Routes }
