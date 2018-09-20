import React from 'react'
import { shallow } from 'enzyme'

import Grid from '..'

describe('components/Grid.Wrapper.Wrapper', () => {
  it('should render a Grid.Wrapper', () => {
    const $ = shallow(
      <Grid.Wrapper>
        <span />
      </Grid.Wrapper>
    )

    expect($.hasClass('lr-o-grid')).toBe(true)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Grid.Wrapper>
        <span />
      </Grid.Wrapper>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Grid.Wrapper className="test">
        <span />
      </Grid.Wrapper>
    )

    expect($.hasClass('test')).toBe(true)
  })
})
