import React from 'react'
import { shallow } from 'enzyme'

import Component from '../Component'

describe('components/Flag.Component', () => {
  it('should render a flag component', () => {
    const $ = shallow(
      <Component>
        <span />
      </Component>
    )

    expect($.hasClass('lr-o-flag__component')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Component>
        <span />
      </Component>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Component className="test">
        <span />
      </Component>
    )

    expect($.hasClass('test')).toBe(true)
  })
})
