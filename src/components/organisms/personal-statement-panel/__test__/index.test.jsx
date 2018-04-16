import React from 'react'
import {shallow} from 'enzyme'

import PersonalStatementPanel from '..'

describe('components/organisms/personal-statement-panel', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(
      <PersonalStatementPanel/>
    )
  })
})