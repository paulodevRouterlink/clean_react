import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { adapterLogin } from '@/main/adapters'

const { authentication, validation } = adapterLogin()

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login validation={validation} authentication={authentication} />,
})

export { appRoutes }
