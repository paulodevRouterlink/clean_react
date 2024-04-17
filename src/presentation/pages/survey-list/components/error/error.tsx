import { FC } from 'react'
import { SurveyStateProps } from '@/presentation/pages/survey-list/types'
import Styled from './error.module.scss'

const Error: FC<SurveyStateProps> = ({ state }) => {
  return (
    <div className={Styled.error_container}>
      <span data-testid="error">{state.error}</span>
      <button>Recarregar</button>
    </div>
  )
}

export { Error }
