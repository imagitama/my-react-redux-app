import { moviesReducer } from './movies'

it('Returns the correct default state', () => {
  expect(moviesReducer(undefined, {})).toEqual({
    fetching: false,
    movies: [],
    errorMessage: ''
  })
})