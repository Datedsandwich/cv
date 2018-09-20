import React from 'react'
import { shallow } from 'enzyme'

import PersonalStatement from '..'

describe('components/organisms/personal-statement', () => {
  it('should render without crashing', () => {
    const $ = shallow(<PersonalStatement />)
  })
})
