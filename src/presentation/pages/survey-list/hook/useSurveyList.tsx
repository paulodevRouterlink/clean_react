/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { LoadSurveyList } from '@/domain/usecases'
import { SurveyState } from '../types'

const useSurveyList = ({ loadSurveyList }: SurveyState.Types) => {
  const [state, setState] = useState<SurveyState.Params>({
    surveys: [] as LoadSurveyList.Model[],
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
