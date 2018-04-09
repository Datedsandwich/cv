import React from 'react'
import T from 'prop-types'

const Card = ({children, className}) => <div className={`lr-c-card ${className}`}>
  {children}
</div>

Card.propTypes = {
  children: T.node,
  className: T.string
}

Card.defaultProps = {
  children: null,
  className: ''
}

export default Card;