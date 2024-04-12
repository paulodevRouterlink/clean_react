import { FC } from 'react'
import { RouteObject } from 'react-router-dom'
import { AuthLayout } from '@/presentation/layout'
import { makeRoute } from '../factory/routes'

type FactoryProps = {
  makeLogin: FC
  makeSignUp: FC
}

const appRoutes = (props: FactoryProps): RouteObject => {
  const { makeLogin: Login, makeSignUp: SignUp } = props

  return {
    path: '/',
    element: <AuthLayout />,
    children: [makeRoute('signin', <Login />), makeRoute('signup', <SignUp />)],
  }
}

export { appRoutes }
