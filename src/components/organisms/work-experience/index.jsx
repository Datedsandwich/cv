import React from 'react';

import Experiences from 'components/molecules/experiences';

class WorkExperience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    key: 1,
                    timeframe: 'August 2016 - March 2018',
                    title: 'BlackCat Technology Solutions',
                    subtitle: 'Software Engineer - Birmingham',
                    body: 'Worked on a Fixed Asset Management Suite, using Java (and Dropwizard) for the ba' +
                            'ck-end, and JavaScript (AngularJS) for the Front-End.'
                }, {
                    key: 2,
                    timeframe: 'November 2015 - August 2016',
                    title: 'Invisibit Studios',
                    subtitle: 'Gameplay Programmer - Great Malvern',
                    body: 'Working on Bip, written in C# using the Unity engine, and myself and the Technic' +
                            'al Lead would often engage in Pair Programming to ensure the quality of the code' +
                            ' we produced.'
                }
            ]
        }
    }

    render() {
        return (
            <div id='experience'>
                <Experiences title='Work Experience' experiences={this.state.experiences}/>
            </div>
        )
    }
}

export default WorkExperience;