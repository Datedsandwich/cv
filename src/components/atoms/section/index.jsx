import React from 'react'
import T from 'prop-types'

const Section = ({children, className, title}) => {
    return (
        <div className={`lr-c-section ${className}`}>
            <div className='lr-c-section__title'>
                <h1>{title}</h1>
            </div>
            <div className='lr-c-section__content'>
                {children}
            </div>
        </div>
    )
}

Section.propTypes = {
    children: T.node,
    className: T.string,
    title: T.string
}

Section.defaultProps = {
    children: null,
    className: '',
    title: ''
}

export default Section;