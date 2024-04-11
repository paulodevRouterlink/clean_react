import { FC } from 'react'
import { RouteObject } from 'react-router-dom'

type Props = {
  makeLogin: FC
}

const appRoutes = ({ makeLogin: Login }: Props): RouteObject[] => [
  { path: '/login', element: <Login /> },
  { path: '/sign-up', element: <h1>sign-up</h1> },
]

export { appRoutes }
