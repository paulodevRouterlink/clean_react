import { render } from '@testing-library/react'
import { Login } from './login'

describe('Login Component', () => {
  test('Should not render helperText message', () => {
    const { getByTestId } = render(<Login />)
    const helperText = getByTestId('helper-text')
    expect(helperText.childElementCount).toBe(0)
  })
})
