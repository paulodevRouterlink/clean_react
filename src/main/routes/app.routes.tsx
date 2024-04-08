import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { adapterLogin } from '@/main/adapters'

const { authentication, validation } = adapterLogin()

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login validation={validation} authentication={authentication} />,
})

const signUp = (): RouteObject => ({
  path: '/sign-up',
  element: <h1>sign-up</h1>,
})

export { appRoutes, signUp }
