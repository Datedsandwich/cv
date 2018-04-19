import React from 'react'
import {shallow} from 'enzyme'

import Section from '..'

describe('components/section', () => {
  it('should render a section', () => {
    const $ = shallow(
      <Section><span/></Section>
    )

    expect($.hasClass('lr-c-section')).toBe(true)
  })

  it('should render its title', () => {
    const title = 'Section';
    const $ = shallow(
      <Section title={title}><span/></Section>
    )

    expect($.find('.lr-c-section__title').text()).toEqual(title)
  })

  it('should render its children', () => {
    const $ = shallow(
      <Section><span/></Section>
    )

    expect($.find('span').exists()).toBe(true)
  })

  it('should apply css classes', () => {
    const $ = shallow(
      <Section className="test"><span/></Section>
    )

    expect($.hasClass('test')).toBe(true)
  })
})