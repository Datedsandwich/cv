import React from 'react'
import PropTypes from 'prop-types'

import Flag from 'components/layout/flag'
import Anchor from 'components/atoms/anchor'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            navbarHeight: 70
        }

        this.toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        this.close = () => {
            this.setState({isOpen: false})
        }
    }

    render() {
        return (
            <nav
                className={`lr-c-navbar lr-u-hard-bottom ${this.state.isOpen
                ? 'is-open'
                : ''}`}>
                <div className='lr-c-navbar__inner'>
                    <button className='lr-c-navbar__overlay' onClick={this.close}></button>
                    <Flag.Wrapper className='lr-u-fill-height'>
                        <Flag.Component>
                            <div className='lr-c-navbar__brand'>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#contact-info'
                                    onClick={this.close}>Luke Robinson</Anchor>
                            </div>
                        </Flag.Component>
                        <Flag.Body>
                            <div className='lr-c-navbar__links'>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#contact-info'
                                    onClick={this.close}>Contact Info</Anchor>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#experience'
                                    onClick={this.close}>Experience</Anchor>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#education'
                                    onClick={this.close}>Education</Anchor>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#skills'
                                    onClick={this.close}>Skills</Anchor>
                                <Anchor
                                    className='lr-c-navbar__item'
                                    offset={this.state.navbarHeight}
                                    href='#projects'
                                    onClick={this.close}>Projects</Anchor>
                            </div>
                            <button className='lr-c-navbar__item lr-c-navbar__toggle' onClick={this.toggle}>&#9776;</button>
                        </Flag.Body>
                    </Flag.Wrapper>
                </div>
            </nav>
        )
    }
}

export default Navbar