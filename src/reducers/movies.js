import { store } from '../store'
import { getMoviesFromApiAsync } from '../api'
import { FETCH_MOVIES, MOVIES_FETCHED, moviesFetched, FAILED_TO_FETCH_MOVIES, failedToFetchMovies } from '../actions/movies'

export function moviesReducer(state = { fetching: false, movies: [] }, action) {
  switch (action.type) {

    case FETCH_MOVIES:
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

    case MOVIES_FETCHED:
      return {
        ...state,
        fetching: false,
        movies: action.movies
      }

    case FAILED_TO_FETCH_MOVIES:
      return {
        ...state,
        fetching: false,
        errorMessage: action.errorMessage
      }

    default:
      return state
  }
}