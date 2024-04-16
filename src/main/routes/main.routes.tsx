import { RouteObject } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'
import { makeRoute } from '@/main/factory/routes'
import { PrivateRoute } from '@/main/proxy'

const mainRoutes = (): RouteObject => ({
  path: '/',
  element: <PrivateRoute />,
  children: [makeRoute('survey-list', <SurveyList />)],
})

export { mainRoutes }
