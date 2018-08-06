import React from 'react'
import { mount } from 'enzyme'
import { Movie } from './movie'

it('Matches the snapshot', () => {
  expect(mount(<Movie />)).toMatchSnapshot()
})