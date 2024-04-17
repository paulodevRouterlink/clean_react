/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { SurveyProps } from '../survey-list'
import { SurveyModel } from '@/domain/models'
import { SurveyStateParams } from '../types'

const useSurveyList = ({ loadSurveyList }: SurveyProps) => {
  const [state, setState] = useState<SurveyStateParams>({
    surveys: [] as SurveyModel[],
    error: '',
    reload: false,
  })

  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then((surveys) => setState({ ...state, surveys }))
      .catch((error) => setState({ ...state, error: error.message }))
  }, [state.reload])

  return { state, setState }
}

export { useSurveyList }
