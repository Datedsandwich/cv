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
                    <h4 className="lr-u-text-align-center">C#</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Unity 3D</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">XNA/MonoGame</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Game Design</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">JavaScript</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">HTML5</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">CSS 3</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">AngularJS</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">React</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">NodeJS</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">jQuery</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Java</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Dropwizard</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">Hibernate</h4>
                </Grid.Item>
                <Grid.Item className='lr-u-1/3@sm lr-u-1/2@max-sm'>
                    <h4 className="lr-u-text-align-center">SQL</h4>
                </Grid.Item>
            </Grid.Wrapper>
        </Card>
    )
}

export default Skills;