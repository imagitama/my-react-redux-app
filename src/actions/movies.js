export const FETCH_MOVIES = 'FETCH_MOVIES'
export function fetchMovies() {
  return {
    type: FETCH_MOVIES
  }
}

export const MOVIES_FETCHED = 'MOVIES_FETCHED'
export function moviesFetched({ movies }) {
  return {
    type: MOVIES_FETCHED,
    movies
  }
}

export const FAILED_TO_FETCH_MOVIES = 'FAILED_TO_FETCH_MOVIES'
export function failedToFetchMovies({ error }) {
  return {
    type: FAILED_TO_FETCH_MOVIES,
    errorMessage: error.message
  }
}