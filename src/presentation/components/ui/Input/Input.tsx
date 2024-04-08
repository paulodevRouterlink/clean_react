import { FocusEvent, forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import Styled from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string | undefined
  name: string
  message?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, name, message, ...rest }, ref) => {
    const enabledInput = (event: FocusEvent<HTMLInputElement>) => {
      event.target.readOnly = false
    }

    const getStatus = (): string => (message ? '🔴' : '🟢')
    const getError = (): string => message || 'Tudo Certo!'

    return (
      <div className={Styled.input_field}>
        <div className={Styled.input_field__wrap}>
          <input
            {...rest}
            ref={ref}
            data-testid={name}
            id={name}
            name={name}
            readOnly
            onFocus={enabledInput}
            className={classNames(Styled.input, {
              [Styled.input__invalid]: error,
            })}
          />
          <span title={getError()} data-testid={`${name}-status`}>
            {getStatus()}
          </span>
        </div>

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
