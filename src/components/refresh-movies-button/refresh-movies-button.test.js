import React from 'react'
import { mount } from 'enzyme'
import { RefreshMoviesButton } from './refresh-movies-button'

it('Matches the snapshot', () => {
  expect(mount(<RefreshMoviesButton fetchMovies={() => null} />)).toMatchSnapshot()
})