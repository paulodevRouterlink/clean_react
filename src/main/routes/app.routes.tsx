import { RouteObject } from 'react-router-dom'
import { AuthLayout } from '@/presentation/layout'
import { makeRoute } from '../factory/routes'
import { MakeLogin, MakeSignUp } from '../factory/pages'

const appRoutes = (): RouteObject => ({
  path: '/',
  element: <AuthLayout />,
  children: [
    makeRoute('signin', <MakeLogin />),
    makeRoute('signup', <MakeSignUp />),
  ],
})

export { appRoutes }
