/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { CardSurvey, CardSurveyEmpty } from './components'
import Styled from './survey-list.module.scss'
import { ILoadSurveyList } from '@/domain/usecases'
import { useSurveyList } from './hook/useSurveyList'

type SurveyProps = {
  loadSurveyList: ILoadSurveyList
}

const SurveyList: FC<SurveyProps> = ({ loadSurveyList }) => {
  const { state, handlerSurveyLoadAll } = useSurveyList({ loadSurveyList })

  useEffect(() => {
    handlerSurveyLoadAll()
  }, [])

  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      <ul data-testid="survey-list">
        {state.surveys.length ? (
          state.surveys.map((props) => (
            <CardSurvey key={props.id} survey={props} />
          ))
        ) : (
          <CardSurveyEmpty />
        )}
      </ul>
    </div>
  )
}

export { SurveyList }
export type { SurveyProps }
