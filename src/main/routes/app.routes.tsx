import { FC } from 'react'
import { RouteObject } from 'react-router-dom'
import { SignUp } from '@/presentation/pages'
import { AuthLayout } from '@/presentation/layout'

type Props = {
  makeLogin: FC
}

const appRoutes = ({ makeLogin: Login }: Props): RouteObject => ({
  path: '/',
  element: <AuthLayout />,
  children: [
    { path: 'signin', element: <Login /> },
    { path: 'signup', element: <SignUp /> },
  ],
})

export { appRoutes }
