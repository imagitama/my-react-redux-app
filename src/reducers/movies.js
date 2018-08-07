import { store } from '../store'
import { getMoviesFromApiAsync } from '../api'
import { moviesFetched, failedToFetchMovies } from '../actions/movies'

export function moviesReducer(state = { fetching: false, movies: [], errorMessage: '' }, action = { type: '' }) {
  switch (action.type) {

    // Tried using constants for each one but Jest doesn't like that :(
    case 'FETCH_MOVIES':
      if (state.fetching) {
        return state
      }

      getMoviesFromApiAsync()
        .then(movies => store.dispatch(moviesFetched({ movies })))
        .catch(error => store.dispatch(failedToFetchMovies({ error })))

      return {
        ...state,
        fetching: true
      }

    case 'MOVIES_FETCHED':
      return {
        ...state,
        fetching: false,
        errorMessage: '',
        movies: action.movies
      }

    case 'FAILED_TO_FETCH_MOVIES':
      return {
        ...state,
        fetching: false,
        errorMessage: action.errorMessage
      }

    default:
      return state
  }
}