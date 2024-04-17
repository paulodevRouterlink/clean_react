import { RemoteLoadSurveyList } from '@/data/usecases'
import { ILoadSurveyList } from '@/domain/usecases'
import { makeApiURL, makeAxiosHttpClient } from '@/main/factory/http'

export const makeRemoteLoadSurveyList = (): ILoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiURL('/surveys'), makeAxiosHttpClient())
}
