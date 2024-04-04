import { InputHTMLAttributes, forwardRef } from 'react'
import styled from './input.module.scss'
import classNames from 'classnames'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, ...rest }, ref) => (
    <div className={styled.input__wrapper}>
      <input
        {...rest}
        ref={ref}
        className={classNames(styled.input, {
          [styled.input_invalid]: error,
        })}
      />
      {error && <span>{helperText}</span>}
    </div>
  ),
)

Input.displayName = 'Input'

export { Input }
