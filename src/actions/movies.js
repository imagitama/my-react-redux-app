
import { getMoviesFromApiAsync } from '../api'

export const MOVIES_FETCH = 'MOVIES_FETCH'
export function moviesFetch() {
  return {
    type: MOVIES_FETCH
  }
}

export const MOVIES_FETCH_ASYNC = 'MOVIES_FETCH_ASYNC'
export function moviesFetchAsync() {
  return (dispatch, getStore) => {
    if (getStore().fetching) {
      return
    }

    dispatch(moviesFetch())

    getMoviesFromApiAsync()
      .then(movies => dispatch(moviesFetchSuccess({ movies })))
      .catch(error => dispatch(moviesFetchFailed({ error })))
  }
}

export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS'
export function moviesFetchSuccess({ movies }) {
  return {
    type: MOVIES_FETCH_SUCCESS,
    movies
  }
}

export const MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED'
export function moviesFetchFailed({ error }) {
  return {
    type: MOVIES_FETCH_FAILED,
    errorMessage: error.message
  }
}
