import { RouteObject } from 'react-router-dom'
import { makeRoute } from '@/main/factory/routes'
import { PrivateRoute } from '@/main/proxy'
import { MakeSurveyList } from '@/main/factory/pages'

const mainRoutes = (): RouteObject => ({
  path: '/',
  element: <PrivateRoute />,
  children: [makeRoute('survey-list', <MakeSurveyList />)],
})

export { mainRoutes }
