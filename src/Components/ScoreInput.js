import { useScore } from '../globalState.js/hooks'


const ScoreInput = () => {
  const [ score, setScore ] = useScore()

  return <input type="number" onChange={(event) => setScore(event.target.value)}/>
}

export default ScoreInput
