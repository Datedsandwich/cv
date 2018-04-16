import React from 'react'
import {shallow} from 'enzyme'

import ExperiencePanel from '..'

describe('components/organisms/experience-panel', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(
      <ExperiencePanel/>
    )
  })
})