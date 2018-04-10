import React from 'react'
import {shallow} from 'enzyme'

import Wrapper from '../Wrapper'

describe('components/Grid.Wrapper', () => {
  it('should render a grid', () => {
    const $ = shallow(
      <Wrapper><span/></Wrapper>
    )

    expect($.hasClass('lr-o-grid')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Wrapper><span/></Wrapper>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Wrapper className="test"><span/></Wrapper>
    )

    expect($.hasClass('test')).toBe(true)
  })
})