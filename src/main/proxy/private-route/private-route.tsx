import { FC, useContext } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'
import { AppContext } from '@/presentation/contexts/api'
import { RootLayout } from '@/presentation/layout'

export const PrivateRoute: FC<RouteProps> = () => {
  const { getCurrentAccount } = useContext(AppContext)

  return <RootLayout />

  return getCurrentAccount()?.accessToken ? (
    <RootLayout />
  ) : (
    <Navigate to="/signin" />
  )
}
