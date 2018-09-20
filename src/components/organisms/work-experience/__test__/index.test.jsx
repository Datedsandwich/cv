import React from 'react'
import { shallow } from 'enzyme'

import WorkExperience from '..'

describe('components/organisms/work-experience', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(<WorkExperience />)
  })
})
