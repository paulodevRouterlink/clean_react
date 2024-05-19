import { Dispatch, FC, SetStateAction } from 'react'
import { SurveyState } from '@/presentation/pages/survey-list/types'
import Styled from './error.module.scss'

type SurveySetStateProps = {
  setState: Dispatch<SetStateAction<SurveyState.Params>>
}

type ErrorProps = {
  props: SurveyState.Props & SurveySetStateProps
}

const Error: FC<ErrorProps> = ({ props: { state, setState } }) => {
  const handleReload = () => {
    setState({ surveys: [], error: '', reload: !state.reload })
  }

  return (
    <div className={Styled.error_container}>
      <span data-testid="error">{state.error}</span>
      <div>
        <button
          className="button-primary"
          data-testid="reload"
          onClick={handleReload}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}

export { Error }
