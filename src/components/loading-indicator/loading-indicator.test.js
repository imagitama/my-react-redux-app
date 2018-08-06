import React from 'react'
import { mount } from 'enzyme'
import { LoadingIndicator } from './loading-indicator'

it('Matches the snapshot', () => {
  expect(mount(<LoadingIndicator />)).toMatchSnapshot()
})