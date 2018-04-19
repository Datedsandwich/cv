import React from 'react'
import {mount} from 'enzyme'

import Project from '..'

describe('components/molecules/project', () => {
    it('should display correct information', () => {
        const link = 'https://datedsandwich.github.io/cv/'
        const image = '/an-image'
        const title = 'A Project'
        const body = 'I worked on this and it was pretty cool'

        const $ = mount(<Project link={link} image={image} title={title} body={body}/>)

        expect($.find('.lr-c-project__link').prop('href')).toEqual(link);
        expect($.find('.lr-c-project__image').prop('src')).toEqual(image);
        expect($.find('.lr-c-project__title').text()).toEqual(title);
        expect($.find('.lr-c-project__body').text()).toEqual(body);
    })
})