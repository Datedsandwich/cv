import React from 'react'
import T from 'prop-types'

const GridItem = ({children, className}) => <div className={`lr-o-grid__item ${className}`}>
    {children}
</div>

GridItem.propTypes = {
    children: T.node,
    className: T.string
}

GridItem.defaultProps = {
    children: null,
    className: ''
}

export default GridItem;