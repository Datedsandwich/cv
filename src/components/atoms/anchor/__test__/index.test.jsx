import React from 'react'
import {shallow} from 'enzyme'

import Anchor from '..'

describe('components/anchor', () => {
    it('should render an Anchor', () => {
        const $ = shallow(
            <Anchor><span/></Anchor>
        )

        expect($.find('a').length).toEqual(1)
    })

    it('should render its children', () => {
        const $ = shallow(
            <Anchor><span/></Anchor>
        )

        expect($.find('span').exists()).toBe(true)
    })

    it('should apply css classes', () => {
        const $ = shallow(
            <Anchor className="test"><span/></Anchor>
        )

        expect($.hasClass('test')).toBe(true)
    })

    it('should apply props', () => {
        const href = '#test';
        const $ = shallow(
            <Anchor href={href}><span/></Anchor>
        )

        expect($.props().href).toEqual(href)
    })
})