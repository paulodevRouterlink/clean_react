import { useState } from 'react'
import { SurveyProps } from '../survey-list'
import { SurveyModel } from '@/domain/models'

const useSurveyList = ({ loadSurveyList }: SurveyProps) => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: '',
  })

  async function handlerSurveyLoadAll() {
    await loadSurveyList
      .loadAll()
      .then((surveys) => setState({ ...state, surveys }))
      .catch((error) => setState({ ...state, error: error.message }))
  }

  return { state, setState, handlerSurveyLoadAll }
}

export { useSurveyList }
