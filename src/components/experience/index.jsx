import React from 'react'
import T from 'prop-types'

import Grid from 'components/layout/grid'

function Experience(props) {
  return (
    <Grid.Wrapper>
      <Grid.Item className="lr-c-experience__left lr-u-1/2@sm">
        <h4 className="lr-c-experience__timeframe">{props.timeframe}</h4>
      </Grid.Item>
      <Grid.Item className="lr-c-experience__right lr-u-1/2@sm">
        <h4 className="lr-c-experience__title">{props.title}</h4>
      </Grid.Item>
      <Grid.Item className="lr-c-experience__left lr-u-1/2@sm">
        <p className="lr-c-experience__subtitle">{props.subtitle}</p>
      </Grid.Item>
      <Grid.Item className="lr-c-experience__right lr-u-1/2@sm">
        <div className="lr-c-experience__text-body">{props.body}</div>
      </Grid.Item>
    </Grid.Wrapper>
  )
}

Experience.propTypes = {
  timeframe: T.string.isRequired,
  title: T.string.isRequired,
  subtitle: T.string.isRequired,
  body: T.node.isRequired
}

export default Experience
