import React from 'react';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';
import Experiences from 'components/molecules/experiences'

function ExperiencePanel (props) {
    return (
        <Card className='lr-c-card--grey'>
            <Grid.Wrapper className='lr-o-grid--spaced'>
                <Grid.Item>
                    <h1 className="lr-u-text-align-center">{props.title}</h1>
                </Grid.Item>
                <Grid.Item>
                    <Experiences values={props.experiences}/>
                </Grid.Item>
            </Grid.Wrapper>
        </Card>
    )
}

export default ExperiencePanel;