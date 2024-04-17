/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react'
import { CardSurvey, CardSurveyEmpty } from './components'
import Styled from './survey-list.module.scss'
import { ILoadSurveyList } from '@/domain/usecases'
import { useSurveyList } from './hook/useSurveyList'

type SurveyProps = {
  loadSurveyList: ILoadSurveyList
}

const SurveyList: FC<SurveyProps> = ({ loadSurveyList }) => {
  const { state } = useSurveyList({ loadSurveyList })

  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      {state.error ? (
        <div>
          <span data-testid="error">{state.error}</span>
          <button>Recarregar</button>
        </div>
      ) : (
        <ul data-testid="survey-list">
          {state.surveys.length ? (
            state.surveys.map((props) => (
              <CardSurvey key={props.id} survey={props} />
            ))
          ) : (
            <CardSurveyEmpty />
          )}
        </ul>
      )}
    </div>
  )
}

export { SurveyList }
export type { SurveyProps }
