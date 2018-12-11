import React from 'react'
import { mount } from 'enzyme'

import Experience from '..'

describe('components/experience', () => {
  it('should display correct information', () => {
    const timeframe = 'August 2016 - February 2018'
    const title = 'BlackCat Technology Solutions'
    const subtitle = 'Software Engineer'
    const textBody = 'I worked here and it was pretty cool'

    const $ = mount(
      <Experience
        timeframe={timeframe}
        title={title}
        subtitle={subtitle}
        body={textBody}
      />
    )

    expect($.find('.lr-c-experience__timeframe').text()).toEqual(timeframe)
    expect($.find('.lr-c-experience__title').text()).toEqual(title)
    expect($.find('.lr-c-experience__subtitle').text()).toEqual(subtitle)
    expect($.find('.lr-c-experience__text-body').text()).toEqual(textBody)
  })
})
