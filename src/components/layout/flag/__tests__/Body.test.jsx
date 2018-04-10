import React from 'react'
import {shallow} from 'enzyme'

import Body from '../Body'

describe('components/Flag.Body', () => {
  it('should render a flag body', () => {
    const $ = shallow(
      <Body><span/></Body>
    )

    expect($.hasClass('lr-o-flag__body')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Body><span/></Body>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Body className="test"><span/></Body>
    )

    expect($.hasClass('test')).toBe(true)
  })
})