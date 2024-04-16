import { SurveyProps } from '../survey-list'

const useSurveyList = ({ loadSurveyList }: SurveyProps) => {
  async function handlerSurveyLoadAll() {
    await loadSurveyList.loadAll()
  }

  return { handlerSurveyLoadAll }
}

export { useSurveyList }
