import React from 'react';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';
import Experiences from 'components/organisms/experiences'

class ExperiencePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    timeframe: 'August 2016 - February 2018',
                    title: 'BlackCat Technology Solutions',
                    subtitle: 'Software Engineer',
                    text: 'I worked here and it was pretty cool',
                    key: 1
                }
            ]
        }
    }

    render() {
        return (
            <Card className='lr-c-card--grey'>
                <Grid.Wrapper className='lr-o-grid--spaced'>
                    <Grid.Item>
                        <h1 className="lr-u-text-align-center">Experience</h1>
                    </Grid.Item>
                    <Grid.Item>
                        <Experiences values={this.state.experiences}/>
                    </Grid.Item>
                </Grid.Wrapper>
            </Card>
        )
    }
}

export default ExperiencePanel;