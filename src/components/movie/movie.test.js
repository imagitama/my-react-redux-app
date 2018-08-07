import React from 'react'
import { mount } from 'enzyme'
import { Movie } from './movie'

it('Matches the snapshot', () => {
  expect(mount(<Movie title='My movie' releaseYear='2000' />)).toMatchSnapshot()
})

// TODO: Test if props are empty