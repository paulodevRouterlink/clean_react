import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from 'react'
import classNames from 'classnames'
import styled from './button.module.scss'

type SizeButton = 'small' | 'medium' | 'large'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: SizeButton
  sx?: CSSProperties
  isLoading?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { children, sx, isLoading = false, size = 'default', ...rest } = props

  return (
    <button
      {...rest}
      style={sx}
      className={classNames(styled.Button, {
        [styled['Button-small']]: size === 'small',
        [styled['Button-medium']]: size === 'medium',
        [styled['Button-large']]: size === 'large',
      })}
    >
      {isLoading ? (
        <span data-testid="spinner" className={styled.loading}>
          <span className="loader" />
          Carregando
        </span>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export { Button }
