import React from 'react'
import { mount } from 'enzyme'
import { Movies } from './movies'

it('Matches the snapshot', () => {
  expect(mount(<Movies />)).toMatchSnapshot()
})