import React from 'react'
import T from 'prop-types'

import smoothscroll from 'smoothscroll-polyfill'

class Anchor extends React.Component {
  constructor(props) {
    super(props)

    this.PropTypes = {
      children: T.node,
      offset: T.number
    }

    this.smoothScroll = e => {
      e.preventDefault()

      const offset = this.props.offset ? this.props.offset : 0

      const id = this.props.href.slice(1)

      const scrollTo = document.getElementById(id).offsetTop - offset

      console.log(scrollTo)

      window.scrollTo({ top: scrollTo, behavior: 'smooth' })

      if (this.props.onClick) {
        this.props.onClick(e)
      }
    }
  }

  componentDidMount() {
    smoothscroll.polyfill()
  }

  render() {
    return (
      <a {...this.props} onClick={this.smoothScroll}>
        {this.props.children}
      </a>
    )
  }
}

export default Anchor
