import React from 'react'
import { shallow } from 'enzyme'

import Navbar from '..'

describe('components/navbar', () => {
  it('should render a navbar', () => {
    const $ = shallow(<Navbar />)

    expect($.hasClass('lr-c-navbar')).toBe(true)
  })

  it('should open the navbar overlay when toggle button is clicked', () => {
    const $ = shallow(<Navbar />)
    $.find('.lr-c-navbar__toggle').simulate('click')

    expect($.hasClass('is-open')).toBe(true)
  })

  it('should close the navbar overlay when toggle button is clicked', () => {
    const $ = shallow(<Navbar />)
    $.find('.lr-c-navbar__toggle').simulate('click')
    $.find('.lr-c-navbar__toggle').simulate('click')

    expect($.hasClass('is-open')).toBe(false)
  })

  it('should close the navbar overlay when overlay is clicked', () => {
    const $ = shallow(<Navbar />)
    $.find('.lr-c-navbar__toggle').simulate('click')
    $.find('.lr-c-navbar__overlay').simulate('click')

    expect($.hasClass('is-open')).toBe(false)
  })

  it('should close the navbar overlay when a link is clicked', () => {
    const $ = shallow(<Navbar />)
    $.find('.lr-c-navbar__toggle').simulate('click')
    $.find('Anchor')
      .at(0)
      .simulate('click')

    expect($.hasClass('is-open')).toBe(false)
  })
})
