export class InvalidCredentialError extends Error {
  constructor() {
    super('Credencias inválida')
    this.name = 'InvalidCredentialError'
  }
}
