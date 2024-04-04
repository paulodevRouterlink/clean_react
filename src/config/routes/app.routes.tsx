import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login />,
})

export { appRoutes }
