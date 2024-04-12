import { FC } from 'react'
import { RouteObject } from 'react-router-dom'
import { AuthLayout } from '@/presentation/layout'
import { makeRoute } from '../factory/routes'

type Props = {
  makeLogin: FC
  makeSignUp: FC
}

const appRoutes = ({
  makeLogin: Login,
  makeSignUp: SignUp,
}: Props): RouteObject => ({
  path: '/',
  element: <AuthLayout />,
  children: [makeRoute('signin', <Login />), makeRoute('signup', <SignUp />)],
})

export { appRoutes }
