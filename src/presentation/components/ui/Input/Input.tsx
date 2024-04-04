import { FocusEvent, InputHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import Styled from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string | undefined
  name: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, name, ...rest }, ref) => {
    const enabledInput = (event: FocusEvent<HTMLInputElement>) => {
      event.target.readOnly = false
    }

    return (
      <div className={Styled.input_field}>
        <input
          {...rest}
          ref={ref}
          data-testid={name}
          name={name}
          readOnly
          onFocus={enabledInput}
          className={classNames(Styled.input, {
            [Styled.input__invalid]: error,
          })}
        />
        {error && (
          <div data-testid="helper-text">
            <span className={Styled.input_field__helper_text}>
              {helperText}
            </span>
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
