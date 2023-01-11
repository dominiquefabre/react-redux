import send from '../send'

export const setData = (name, value) => ({
  type: 'SET_DATA',
  payload: {
    name,
    value
  }
})

export const setIsLoading = (isLoading = true) => ({
  type: 'SET_IS_LOADING',
  payload: {
    isLoading
  }
})

export const setSuccess = (success = true) => ({
  type: 'SET_SUCCESS',
  payload: {
    success
  }
})

export const submit = () => async (dispatch, state) => {
  console.log('de')
  dispatch(setIsLoading())
  await send(state.data)
  dispatch(setSuccess())
  dispatch(setIsLoading(false))
}