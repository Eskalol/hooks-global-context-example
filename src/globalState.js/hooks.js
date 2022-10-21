import { useContext } from 'react'
import Context from './Context'
import { selectScore } from './selectors'

const useScore = () => {
  const { state, dispatch } = useContext(Context)
  const setScore = (score) => dispatch({ data: { score }})
  return [
    selectScore(state),
    setScore
  ]
}

export {
  useScore
}
