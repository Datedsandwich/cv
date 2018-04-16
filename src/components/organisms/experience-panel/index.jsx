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
                    timeframe: 'August 2016 - March 2018',
                    title: 'BlackCat Technology Solutions',
                    subtitle: 'Software Engineer - Birmingham',
                    text: 'Worked on a Fixed Asset Management Suite, using Java (and Dropwizard) for the back-end, and JavaScript (AngularJS) for the Front-End.',
                    key: 1
                },
                {
                    timeframe: 'November 2015 - August 2016',
                    title: 'Invisibit Studios',
                    subtitle: 'Gameplay Programmer - Great Malvern',
                    text: 'Working on Bip, written in C# using the Unity engine, and myself and the Technical Lead would often engage in Pair Programming to ensure the quality of the code we produced.',
                    key: 2
                }
            ]
        }
    }

    render() {
        return (
            <Card className='lr-c-card--grey'>
                <Grid.Wrapper className='lr-o-grid--spaced'>
                    <Grid.Item>
                        <h1 className="lr-u-text-align-center">Work Experience</h1>
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