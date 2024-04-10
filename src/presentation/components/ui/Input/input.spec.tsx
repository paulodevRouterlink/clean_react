import { render, screen } from '@testing-library/react'
import { Input } from './input'

describe('InputComponent', () => {
  test('Should begin with readOnly', () => {
    render(<Input name="field" />)
    const input = screen.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
