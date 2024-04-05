import { AuthenticationSpy, ValidationStub } from '@/presentation/test'

export const adapterLogin = () => {
  const validation = new ValidationStub()
  const authentication = new AuthenticationSpy()

  return {
    validation,
    authentication,
  }
}
