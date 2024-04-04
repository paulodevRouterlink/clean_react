import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const appRoutes = (): RouteObject => ({
  path: '/',
  element: <Login />,
})

export { appRoutes }
