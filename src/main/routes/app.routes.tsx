import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationSpy } from '@/presentation/test'

const validationSpy = new ValidationSpy()

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login validation={validationSpy} />,
})

export { appRoutes }
