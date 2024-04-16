/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { CardSurvey, CardSurveyEmpty } from './components'
import Styled from './survey-list.module.scss'
import { ILoadSurveyList } from '@/domain/usecases'

export type SurveyProps = {
  loadSurveyList: ILoadSurveyList
}

const SurveyList: FC<SurveyProps> = ({ loadSurveyList }) => {
  useEffect(() => {
    async function handlerSurveyLoadAll() {
      await loadSurveyList.loadAll()
    }

    handlerSurveyLoadAll()
  }, [])

  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      <ul data-testid="survey-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSurvey key={index} />
        ))}
        <CardSurveyEmpty />
      </ul>
    </div>
  )
}

export { SurveyList }
