import React from 'react'
import PropTypes from 'prop-types'

import Flag from 'components/Flag';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
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
                <div className="lr-c-navbar__inner">
                    <button className="lr-c-navbar__overlay" onClick={this.close}></button>
                    <Flag.Wrapper>
                        <Flag.Component>
                            <div className="lr-c-navbar__brand">
                                <span className="lr-c-navbar__item">Luke Robinson</span>
                            </div>
                        </Flag.Component>
                        <Flag.Body>
                            <div className="lr-c-navbar__links">
                                <a className="lr-c-navbar__item" href="#experience" onClick={this.close}>Experience</a>
                                <a className="lr-c-navbar__item" href="#education" onClick={this.close}>Education</a>
                                <a className="lr-c-navbar__item" href="#skills" onClick={this.close}>Skills</a>
                                <a className="lr-c-navbar__item" href="#skills" onClick={this.close}>References</a>
                            </div>
                            <button className="lr-c-navbar__item lr-c-navbar__toggle" onClick={this.toggle}>&#9776;</button>
                        </Flag.Body>
                    </Flag.Wrapper>
                </div>
            </nav>
        )
    }
}

export default Navbar