import React from 'react'
import {shallow} from 'enzyme'

import Skills from '..'

describe('components/organisms/skills', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(
      <Skills/>
    )
  })
})