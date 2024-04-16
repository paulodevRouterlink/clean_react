import { useState } from 'react'
import { SurveyProps } from '../survey-list'
import { SurveyModel } from '@/domain/models'

const useSurveyList = ({ loadSurveyList }: SurveyProps) => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
  })

  async function handlerSurveyLoadAll() {
    await loadSurveyList.loadAll().then((surveys) => setState({ surveys }))
  }

  return { state, setState, handlerSurveyLoadAll }
}

export { useSurveyList }
