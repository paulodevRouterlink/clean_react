import { forwardRef, InputHTMLAttributes } from 'react'
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
            onFocus={(event) => (event.target.readOnly = false)}
            className={classNames(Styled.input, {
              [Styled.input__invalid]: error,
            })}
          />
          <span data-testid={`${name}-status`} title={message || 'Tudo Certo!'}>
            {message ? '🔴' : '🟢'}
          </span>
        </div>

        {error && (
          <span className={Styled.input_field__helper_text}>{helperText}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export { Input }
