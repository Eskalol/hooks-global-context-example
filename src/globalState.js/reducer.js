export const initialState = {
  score: 0
}

const reducer = (state = initialState, action) => ({
  ...state,
  ...action.data
})

export default reducer
