import React from 'react'
import { shallow } from 'enzyme'

import Body from '../Body'
import Component from '../Component'
import Wrapper from '../Wrapper'

describe('components/Flag.Wrapper', () => {
  const flagBody = (
    <Body>
      <span />
    </Body>
  )
  const flagComponent = (
    <Component>
      <span />
    </Component>
  )

  it('should render a flag component', () => {
    const $ = shallow(
      <Wrapper>
        {flagBody}
        {flagComponent}
      </Wrapper>
    )

    expect($.hasClass('lr-o-flag')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Wrapper>
        {flagBody}
        {flagComponent}
      </Wrapper>
    )

    expect($.find(Body).exists()).toBe(true)
    expect($.find(Component).exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Wrapper className="test">
        {flagBody}
        {flagComponent}
      </Wrapper>
    )

    expect($.hasClass('test')).toBe(true)
  })
})
