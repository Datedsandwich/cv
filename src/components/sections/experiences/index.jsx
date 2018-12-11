import React from 'react'
import T from 'prop-types'

import Section from 'components/generic/section'

import Experience from 'components/molecules/experience'

function Experiences(props) {
  const experiences = props.experiences.map(value => {
    return (
      <div className="lr-u-soft-bottom" key={value.key}>
        <Experience
          timeframe={value.timeframe}
          title={value.title}
          subtitle={value.subtitle}
          body={value.body}
        />
      </div>
    )
  })

  return <Section title={props.title}>{experiences}</Section>
}

Experiences.propTypes = {
  title: T.string.isRequired,
  experiences: T.arrayOf(
    T.shape({
      ...Experience.propTypes,
      key: T.number.isRequired
    })
  )
}

export default Experiences
