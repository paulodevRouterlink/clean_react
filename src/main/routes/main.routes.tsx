import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/presentation/layout'
import { SurveyList } from '@/presentation/pages'
import { makeRoute } from '@/main/factory/routes'

const mainRoutes = (): RouteObject => {
  return {
    path: '/',
    element: <RootLayout />,
    children: [makeRoute('survey-list', <SurveyList />)],
  }
}

export { mainRoutes }
