import React from 'react'

import Card from 'components/atoms/card'
import Grid from 'components/layout/grid'
import Section from 'components/atoms/section'

import skills from 'const/skills'

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const renderSkills = () =>
      skills.map(skill => {
        return (
          <Grid.Item className="lr-u-1/2@sm" key={skill.key}>
            <Card className="lr-c-card--grey lr-u-fill-width">
              <h4 className="lr-u-text-align-center">{skill.name}</h4>
              <p>{skill.text}</p>
            </Card>
          </Grid.Item>
        )
      })

    return (
      <Section title="Skills">
        <Grid.Wrapper className="lr-o-grid--spaced lr-o-grid--match-height">
          {renderSkills()}
        </Grid.Wrapper>
      </Section>
    )
  }
}

export default Skills
