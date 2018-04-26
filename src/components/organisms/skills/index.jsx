import React from 'react';

import Card from 'components/atoms/card'
import Grid from 'components/layout/grid'
import Section from 'components/atoms/section'

class Skills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            skills: [
                {
                    name: 'C# - Proficient',
                    text: `Used throughout my degree, as well as off and on since graduation in a professional context. 
                    Used for all Unity 3D projects, including Bip for a year!`,
                    key: 1
                }, {
                    name: 'Unity 3D - Proficient',
                    text: `Self taught while at University, and used for a year on the project Bip. Has
                    also been used to create several prototypes in my spare time.`,
                    key: 2
                }, {
                    name: 'XNA/MonoGame - Intermediate',
                    text: `Used throughout my degree, including in one of my final year projects.`,
                    key: 3
                }, {
                    name: 'Game Design - Intermediate',
                    text: `Game Design was taught in the first semester of each year of my degree, with
                    Game Development being taught in the second semester. Professionally, this meant
                    I could have meaningful discussions with game designers on Bip about new
                    features before and during development of them.`,
                    key: 4
                }, {
                    name: 'JavaScript - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`,
                    key: 5
                }, {
                    name: 'HTML5 - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`,
                    key: 6
                }, {
                    name: 'CSS3 - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`,
                    key: 7
                }, {
                    name: 'AngularJS - Proficient',
                    text: `Used for almost 2 years as the front end framework for a project at BlackCat. I
                    have quite a deep understanding of AngularJS, even implementing my own Modal
                    system, and a virtual repeater for performance!`,
                    key: 8
                }, {
                    name: 'React - Intermediate',
                    text: `My only real experience of using React is this page, but I like what I've seen
                    so far!`,
                    key: 9
                }, {
                    name: 'jQuery - Proficient',
                    text: `Primarily used alongside AngularJS for testing purposes, and for one project at
                    BlackCat which wasn't using a more feature rich framework.`,
                    key: 10
                }, {
                    name: 'Java - Proficient',
                    text: `I used Java for a couple of assignments at University, and also for almost 2
                    years at BlackCat for the back end of a couple of projects. Specifically Java 8,
                    which brought lambdas!`,
                    key: 11
                }, {
                    name: 'Dropwizard - Proficient',
                    text: `Used on a project at BlackCat for almost 2 years, providing the HTTP backend for
                    a web app. It's a bit more light weight than Spring, and provides some useful
                    testing mechanisms.`,
                    key: 12
                }, {
                    name: 'Hibernate - Proficient',
                    text: `Used as the ORM for a project at BlackCat for almost 2 years. It's a powerful
                    tool, but it has some limitations in it's own query language, HQL.`,
                    key: 13
                }, {
                    name: 'SQL - Proficient',
                    text: `Sometimes, an ORM can't quite do something you need it to, which is when you
                    have to crack out SQL. It's also how we wrote database migrations!`,
                    key: 14
                }
            ]
        }
    }

    render() {
        const skills = this
            .state
            .skills
            .map((skill) => {
                return (
                    <Grid.Item className='lr-u-1/2@sm' key={skill.key}>
                        <Card className='lr-c-card--grey lr-u-fill-width'>
                            <h4 className="lr-u-text-align-center">{skill.name}</h4>
                            <p>
                                {skill.text}
                            </p>
                        </Card>
                    </Grid.Item>
                )
            })

        return (
            <Section title='Skills'>
                <Grid.Wrapper className='lr-o-grid--spaced lr-o-grid--match-height'>
                    {skills}
                </Grid.Wrapper>
            </Section>
        )
    }
}

export default Skills;