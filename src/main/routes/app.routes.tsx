import { RouteObject } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'

const validation = new ValidationStub()

const appRoutes = (): RouteObject => ({
  path: '/login',
  element: <Login validation={validation} />,
})

export { appRoutes }
