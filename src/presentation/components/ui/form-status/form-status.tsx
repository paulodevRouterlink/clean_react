import { FC } from 'react'
import { Spinner } from '../spinner'
import Styled from './form-status.module.scss'

type FormStatusProps = {
  isLoading?: boolean
  mainError?: string
}

const FormStatus: FC<FormStatusProps> = ({ isLoading, mainError }) => {
  // const { isLoading, mainError } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styled.error_wrap}>
      {isLoading && <Spinner />}
      {mainError && (
        <span data-testid="main-error" className={Styled.error_wrap__text}>
          {mainError}
        </span>
      )}
    </div>
  )
}

export { FormStatus }
