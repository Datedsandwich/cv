import React from 'react';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';

function Skills() {
    return (
        <Card className='lr-c-card--grey'>
            <Grid.Wrapper className='lr-o-grid--spaced'>
                <Grid.Item>
                    <h1 id='skills' className="lr-u-text-align-center">Skills</h1>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">C# - Proficient</h4>
                    <p>
                        Used throughout my degree, as well as off and on since graduation in a
                        professional context. Used for all Unity 3D projects, including Bip for a year!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Unity 3D - Proficient</h4>
                    <p>
                        Self taught while at University, and used for a year on the project Bip. Has
                        also been used to create several prototypes in my spare time.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">XNA/MonoGame - Intermediate</h4>
                    <p>
                        Used throughout my degree, including in one of my final year projects.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Game Design - Intermediate</h4>
                    <p>
                        Game Design was taught in the first semester of each year of my degree, with
                        Game Development being taught in the second semester. Professionally, this meant
                        I could have meaningful discussions with game designers on Bip about new
                        features before and during development of them.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">JavaScript - Proficient</h4>
                    <p>
                        Used for a couple of years now, including at BlackCat for front-end on a couple
                        of projects, and even this page!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">HTML5 - Proficient</h4>
                    <p>
                        Used for a couple of years now, including at BlackCat for front-end on a couple
                        of projects, and even this page!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">CSS 3 - Proficient</h4>
                    <p>
                        Used for a couple of years now, including at BlackCat for front-end on a couple
                        of projects, and even this page!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">AngularJS - Proficient</h4>
                    <p>
                        Used for almost 2 years as the front end framework for a project at BlackCat. I
                        have quite a deep understanding of AngularJS, even implementing my own Modal
                        system, and a virtual repeater for performance!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">React - Intermediate</h4>
                    <p>
                        My only real experience of using React is this page, but I like what I've seen
                        so far!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">jQuery - Proficient</h4>
                    <p>
                        Primarily used alongside AngularJS for testing purposes, and for one project at
                        BlackCat which wasn't using a more feature rich framework.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Java - Proficient</h4>
                    <p>
                        I used Java for a couple of assignments at University, and also for almost 2
                        years at BlackCat for the back end of a couple of projects. Specifically Java 8,
                        which brought lambdas!
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Dropwizard - Proficient</h4>
                    <p>
                        Used on a project at BlackCat for almost 2 years, providing the HTTP backend for
                        a web app. It's a bit more light weight than Spring, and provides some useful
                        testing mechanisms.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Hibernate - Proficient</h4>
                    <p>
                        Used as the ORM for a project at BlackCat for almost 2 years. It's a powerful
                        tool, but it has some limitations in it's own query language, HQL.
                    </p>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">SQL - Proficient</h4>
                    <p>
                        Sometimes, an ORM can't quite do something you need it to, which is when you
                        have to crack out SQL. It's also how we wrote database migrations!
                    </p>
                </Grid.Item>
            </Grid.Wrapper>
        </Card>
    )
}

export default Skills;