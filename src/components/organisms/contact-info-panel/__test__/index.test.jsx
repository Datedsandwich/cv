import React from 'react'
import {shallow} from 'enzyme'

import ContactInfoPanel from '..'

describe('components/organisms/contact-info-panel', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(
      <ContactInfoPanel/>
    )
  })
})