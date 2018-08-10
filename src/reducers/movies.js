export function moviesReducer(state = { fetching: false, movies: [], errorMessage: '' }, action = { type: '' }) {
  switch (action.type) {

    // Tried using constants for each one but Jest doesn't like that :(
    case 'MOVIES_FETCH':
      if (state.fetching) {
        return state
      }

      return {
        ...state,
        fetching: true
      }

    case 'MOVIES_FETCH_SUCCESS':
      return {
        ...state,
        fetching: false,
        errorMessage: '',
        movies: action.movies
      }

    case 'MOVIES_FETCH_FAILED':
      return {
        ...state,
        fetching: false,
        errorMessage: action.errorMessage
      }

    default:
      return state
  }
}