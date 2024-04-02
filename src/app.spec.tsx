import { render, screen } from '@testing-library/react'
import { App } from './app'

describe('Jest', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })

  it('work2', () => {
    render(<App />)

    screen.debug()
  })
})
