import React from 'react'
import { mount } from 'enzyme'

import { Experiences } from '..'

describe('components/sections/experiences', () => {
  it('should render Experiences', () => {
    const experiences = [
      {
        timeframe: 'Month 20XX - Month 20XX'
      },
      {
        timeframe: 'Month 20XX - Month 20XX'
      }
    ]

    const $ = mount(
      <Experiences title="Work Experience" experiences={experiences} />
    )

    expect($.find('Experience').length).toEqual(2)
  })
})
