import { FocusEvent, InputHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import Styled from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, ...rest }, ref) => {
    const enabledInput = (event: FocusEvent<HTMLInputElement>): void => {
      event.target.readOnly = false
    }

    return (
      <div className={Styled.input_field}>
        <input
          {...rest}
          ref={ref}
          readOnly
          onFocus={enabledInput}
          className={classNames(Styled.input, {
            [Styled.input__invalid]: error,
          })}
        />
        {error && <span data-testid="helper-text">{helperText}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
