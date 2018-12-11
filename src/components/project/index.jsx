import React from 'react'
import T from 'prop-types'

import Card from 'components/generic/card'
import Grid from 'components/layout/grid'

const Project = ({ link, image, title, body }) => {
  return (
    <a className="lr-c-project__link" href={link}>
      <Card className="lr-c-card--grey lr-c-project">
        <Grid.Wrapper className="lr-o-grid--spaced">
          <Grid.Item className="lr-u-1/3@sm">
            <img className="lr-c-project__image lr-u-fill-width" src={image} />
          </Grid.Item>
          <Grid.Item className="lr-u-2/3@sm">
            <Grid.Wrapper className="lr-o-grid--spaced">
              <Grid.Item>
                <h4 className="lr-c-project__title">{title}</h4>
              </Grid.Item>
              <Grid.Item>
                <div className="lr-c-project__body">{body}</div>
              </Grid.Item>
            </Grid.Wrapper>
          </Grid.Item>
        </Grid.Wrapper>
      </Card>
    </a>
  )
}

Project.propTypes = {
  title: T.string.isRequired,
  body: T.node.isRequired,
  image: T.string.isRequired,
  link: T.string.isRequired
}

export default Project
