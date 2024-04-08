import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Styled from './spinner.module.scss'

type SpinnerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  sx?: CSSProperties
}

const Spinner: FC<SpinnerProps> = ({ sx, ...props }) => {
  return (
    <span
      {...props}
      data-testid="spinner"
      className={[Styled.loading, props.className].join(' ')}
      style={sx}
    >
      <span className="spinner" />
      Carregando
    </span>
  )
}

export { Spinner }
