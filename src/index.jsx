import React from 'react'
import { render } from 'react-dom'
import 'sass/main.scss'

import Card from 'components/generic/card'
import Grid from 'components/layout/grid'
import Navbar from 'components/navbar'
import ContactInfoPanel from 'sections/contact-info-panel'
import PersonalStatement from 'sections/personal-statement'
import WorkExperience from 'sections/work-experience'
import Education from 'sections/education'
import Skills from 'sections/skills'
import Projects from 'sections/projects'

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
