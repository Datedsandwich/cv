import React from 'react'

import Card from 'components/generic/card'
import Grid from 'components/layout/grid'
import Section from 'components/generic/section'

import { skills } from 'const'

export const Skills = () => (
  <Section title="Skills">
    <Grid.Wrapper className="lr-o-grid--spaced lr-o-grid--match-height">
      {skills.map(skill => (
        <Grid.Item className="lr-u-1/2@sm" key={skill.key}>
          <Card className="lr-c-card--grey lr-u-fill-width">
            <h4 className="lr-u-text-align-center">{skill.name}</h4>
            <p>{skill.text}</p>
          </Card>
        </Grid.Item>
      ))}
    </Grid.Wrapper>
  </Section>
)
