import React from 'react'
import T from 'prop-types'

const Wrapper = ({ children, className }) => (
  <div className={`lr-o-grid ${className}`}>{children}</div>
)

Wrapper.propTypes = {
  children: T.node,
  className: T.string
}

Wrapper.defaultProps = {
  children: null,
  className: ''
}

export default Wrapper
