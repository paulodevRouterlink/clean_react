export namespace RequiredError {
  export class FieldError extends Error {
    constructor() {
      super('Campo Obrigatório')
      this.name = 'RequiredFieldError'
    }
  }
}
