import { useScore } from '../globalState.js/hooks'


const ScoreValue = () => {
  const [ score ] = useScore()
  return <h1>
    {score}
  </h1>
}

export default ScoreValue