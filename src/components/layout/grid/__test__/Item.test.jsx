import React from 'react'
import { shallow } from 'enzyme'

import Item from '../Item'

describe('components/Grid.Item', () => {
  it('should render a grid item', () => {
    const $ = shallow(
      <Item>
        <span />
      </Item>
    )

    expect($.hasClass('lr-o-grid__item')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Item>
        <span />
      </Item>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Item className="test">
        <span />
      </Item>
    )

    expect($.hasClass('test')).toBe(true)
  })
})
