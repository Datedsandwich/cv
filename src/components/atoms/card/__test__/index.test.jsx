import React from 'react'
import {shallow} from 'enzyme'

import Card from '..'

describe('components/card', () => {
  it('should render a card', () => {
    const $ = shallow(
      <Card><span/></Card>
    )

    expect($.hasClass('lr-c-card')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Card><span/></Card>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Card className="test"><span/></Card>
    )

    expect($.hasClass('test')).toBe(true)
  })
})