import React from 'react'
import PropTypes from 'prop-types'

import Flag from 'components/Flag';

const Navbar = () => {
    return (
        <nav className="lr-c-navbar lr-u-hard-bottom">
            <Flag.Wrapper>
                <Flag.Component>
                    <div className="lr-c-navbar__brand">
                        <span className="lr-c-navbar__item">Luke Robinson</span>
                    </div>
                </Flag.Component>
                <Flag.Body>
                    <div className="lr-c-navbar__links">
                        <a className="lr-c-navbar__item" href="#experience">Experience</a>
                        <a className="lr-c-navbar__item" href="#education">Education</a>
                        <a className="lr-c-navbar__item" href="#skills">Skills</a>
                        <a className="lr-c-navbar__item" href="#skills">References</a>
                        <button className="lr-c-navbar__button">&#9776;</button>
                    </div>
                </Flag.Body>
            </Flag.Wrapper>
        </nav>
    )
}

Navbar.propTypes = {
    onBasketClicked: PropTypes.func.isRequired
}

export default Navbar