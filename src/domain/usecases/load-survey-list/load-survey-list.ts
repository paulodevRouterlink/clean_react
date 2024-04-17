export namespace LoadSurveyList {
  export type Model = {
    id: string
    question: string
    date: Date
    didAnswer: boolean
  }
}

export interface ILoadSurveyList {
  loadAll(): Promise<LoadSurveyList.Model[]>
}
