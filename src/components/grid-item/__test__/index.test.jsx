import React from 'react'
import {shallow} from 'enzyme'

import GridItem from '..'

describe('components/grid-item', () => {
  it('should render a grid item', () => {
    const $ = shallow(
      <GridItem><span/></GridItem>
    )

    expect($.hasClass('lr-o-grid__item')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <GridItem><span/></GridItem>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <GridItem className="test"><span/></GridItem>
    )

    expect($.hasClass('test')).toBe(true)
  })
})