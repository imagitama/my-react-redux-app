import React from 'react'
import { mount } from 'enzyme'
import { Movies } from './movies'

it('Matches the snapshot', () => {
  expect(mount(<Movies movies={[]} />)).toMatchSnapshot()
})

// TODO: Test with an array of real movies