import React from 'react'
import { render } from 'react-dom'
import 'sass/main.scss'

import Card from 'components/atoms/card'
import Grid from 'components/layout/grid'
import Navbar from 'components/organisms/navbar'
import ContactInfoPanel from 'components/organisms/contact-info-panel'
import PersonalStatement from 'components/organisms/personal-statement'
import WorkExperience from 'components/organisms/work-experience'
import Education from 'components/organisms/education'
import Skills from 'components/organisms/skills'
import Projects from 'components/organisms/projects'

function Application() {
  return (
    <div>
      <Navbar />
      <div className="lr-o-site-wrap">
        <Grid.Wrapper className="lr-o-grid--spaced">
          <Grid.Item id="contact-info">
            <ContactInfoPanel />
          </Grid.Item>
          <Grid.Item>
            <PersonalStatement />
          </Grid.Item>
          <Grid.Item id="experience">
            <WorkExperience />
          </Grid.Item>
          <Grid.Item id="education">
            <Education />
          </Grid.Item>
          <Grid.Item id="skills">
            <Skills />
          </Grid.Item>
          <Grid.Item id="projects">
            <Projects />
          </Grid.Item>
        </Grid.Wrapper>
      </div>
    </div>
  )
}

render(<Application />, document.getElementById('container'))
