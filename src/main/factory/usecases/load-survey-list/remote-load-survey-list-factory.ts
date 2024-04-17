import { makeAuthorizeHttpGetClientDecorator } from '@/main/factory/decorators'
import { RemoteLoadSurveyList } from '@/data/usecases'
import { ILoadSurveyList } from '@/domain/usecases'
import { makeApiURL } from '@/main/factory/http'

export const makeRemoteLoadSurveyList = (): ILoadSurveyList => {
  return new RemoteLoadSurveyList(
    makeApiURL('/surveys'),
    makeAuthorizeHttpGetClientDecorator(),
  )
}
