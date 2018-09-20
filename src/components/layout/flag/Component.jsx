import React from 'react'
import T from 'prop-types'

const Component = ({ children, className }) => (
  <div className={`lr-o-flag__component ${className}`}>{children}</div>
)

Component.propTypes = {
  children: T.node,
  className: T.string
}

Component.defaultProps = {
  children: null,
  className: ''
}

export default Component
