import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationSpy } from '@/presentation/protocols/validation'

const validation = (): ValidationSpy => new ValidationSpy()

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login validation={validation()} />,
})

export { appRoutes }
