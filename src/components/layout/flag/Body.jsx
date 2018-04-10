import React from 'react'
import T from 'prop-types'

const Body = ({children, className}) => <div className={`lr-o-flag__body ${className}`}>
    {children}
</div>

Body.propTypes = {
    children: T.node,
    className: T.string
}

Body.defaultProps = {
    children: null,
    className: ''
}

export default Body;