import { RouteObject } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'
import { makeRoute } from '@/main/factory/routes'
import { PrivateRoute } from '@/main/proxy'
import { LoadSurveyListSpy } from '@/presentation/pages/survey-list/load-survey-adapter'

const loadSurveyAdapter = () => new LoadSurveyListSpy()

const mainRoutes = (): RouteObject => ({
  path: '/',
  element: <PrivateRoute />,
  children: [
    makeRoute(
      'survey-list',
      <SurveyList loadSurveyList={loadSurveyAdapter()} />,
    ),
  ],
})

export { mainRoutes }
