import React, { PureComponent } from 'react'

import Grid from 'components/layout/grid'
import Project from 'components/project'
import Section from 'components/generic/section'

import { projects } from 'const/projects'

class Projects extends PureComponent {
  render() {
    return (
      <Section title="Projects">
        <Grid.Wrapper className="lr-o-grid--spaced">
          {projects.map(project => (
            <Grid.Item key={project.key}>
              <Project
                link={project.link}
                image={project.image}
                title={project.title}
                body={project.body}
              />
            </Grid.Item>
          ))}
        </Grid.Wrapper>
      </Section>
    )
  }
}

export default Projects
