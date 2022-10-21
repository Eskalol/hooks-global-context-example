import { useReducer, useMemo } from 'react'
import reducer, { initialState } from './reducer'
import Context from './Context'

const composeWithGlobalState = (Component) => (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <Context.Provider value={contextValue}>
    <Component {...props} />
  </Context.Provider>
}

export default composeWithGlobalState
