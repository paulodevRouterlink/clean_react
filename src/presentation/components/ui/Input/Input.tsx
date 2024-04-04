import { FocusEvent, InputHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import styled from './input.module.scss'

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
      <div className={styled.input__wrapper}>
        <input
          {...rest}
          readOnly
          onFocus={enabledInput}
          ref={ref}
          className={classNames(styled.input, {
            [styled.input_invalid]: error,
          })}
        />
        {error && <span>{helperText}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
