import { RouteObject } from 'react-router-dom'

export const makeRoute = (path: string, element: JSX.Element): RouteObject => ({
  path,
  element,
})
