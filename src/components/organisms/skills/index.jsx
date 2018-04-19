import React from 'react';

import Section from 'components/atoms/section';
import Grid from 'components/layout/grid';

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    name: 'C# - Proficient',
                    text: `Used throughout my degree, as well as off and on since graduation in a professional context. 
                    Used for all Unity 3D projects, including Bip for a year!`
                }, {
                    name: 'Unity 3D - Proficient',
                    text: `Self taught while at University, and used for a year on the project Bip. Has
                    also been used to create several prototypes in my spare time.`
                }, {
                    name: 'XNA/MonoGame - Intermediate',
                    text: `Used throughout my degree, including in one of my final year projects.`
                }, {
                    name: 'Game Design - Intermediate',
                    text: `Game Design was taught in the first semester of each year of my degree, with
                    Game Development being taught in the second semester. Professionally, this meant
                    I could have meaningful discussions with game designers on Bip about new
                    features before and during development of them.`
                }, {
                    name: 'JavaScript - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`
                }, {
                    name: 'HTML5 - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`
                }, {
                    name: 'CSS3 - Proficient',
                    text: `Used for a couple of years now, including at BlackCat for front-end on a couple
                    of projects, and even this page!`
                }, {
                    name: 'AngularJS - Proficient',
                    text: `Used for almost 2 years as the front end framework for a project at BlackCat. I
                    have quite a deep understanding of AngularJS, even implementing my own Modal
                    system, and a virtual repeater for performance!`
                }, {
                    name: 'React - Intermediate',
                    text: `My only real experience of using React is this page, but I like what I've seen
                    so far!`
                }, {
                    name: 'jQuery - Proficient',
                    text: `Primarily used alongside AngularJS for testing purposes, and for one project at
                    BlackCat which wasn't using a more feature rich framework.`
                }, {
                    name: 'Java - Proficient',
                    text: `I used Java for a couple of assignments at University, and also for almost 2
                    years at BlackCat for the back end of a couple of projects. Specifically Java 8,
                    which brought lambdas!`
                }, {
                    name: 'Dropwizard - Proficient',
                    text: `Used on a project at BlackCat for almost 2 years, providing the HTTP backend for
                    a web app. It's a bit more light weight than Spring, and provides some useful
                    testing mechanisms.`
                }, {
                    name: 'Hibernate - Proficient',
                    text: `Used as the ORM for a project at BlackCat for almost 2 years. It's a powerful
                    tool, but it has some limitations in it's own query language, HQL.`
                }, {
                    name: 'SQL - Proficient',
                    text: `Sometimes, an ORM can't quite do something you need it to, which is when you
                    have to crack out SQL. It's also how we wrote database migrations!`
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
                    <Grid.Item className='lr-u-1/2@sm'>
                        <h4 className="lr-u-text-align-center">{skill.name}</h4>
                        <p>
                            {skill.text}
                        </p>
                    </Grid.Item>
                )
            })

        return (
            <div id='skills'>
                <Section title='Skills'>
                    <Grid.Wrapper className='lr-o-grid--spaced'>
                        {skills}
                    </Grid.Wrapper>
                </Section>
            </div>
        )
    }
}

export default Skills;