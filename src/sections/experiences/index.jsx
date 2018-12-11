import React from 'react'
import T from 'prop-types'

import Section from 'components/generic/section'

import { Experience } from 'components/experience'

const Experiences = props => (
  <Section title={props.title}>
    {props.experiences.map(value => (
      <div className="lr-u-soft-bottom" key={value.key}>
        <Experience
          timeframe={value.timeframe}
          title={value.title}
          subtitle={value.subtitle}
          body={value.body}
        />
      </div>
    ))}
  </Section>
)

Experiences.propTypes = {
  title: T.string.isRequired,
  experiences: T.arrayOf(
    T.shape({
      ...Experience.propTypes,
      key: T.number.isRequired
    })
  )
}

export { Experiences }
