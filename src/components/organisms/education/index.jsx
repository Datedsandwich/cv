import React from 'react';

import Experiences from 'components/organisms/experiences';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    key: 1,
                    timeframe: 'September 2013 – June 2016',
                    title: '2.1 Bsc (Hons) Computer Games Design and Development',
                    subtitle: 'University of Worcester',
                    body: (
                        <div>
                            <p>Modules</p>
                            <ul className='lr-o-list lr-u-soft-left-double'>
                                <li>Advanced Game Design and Engineering</li>
                                <li>Application Development</li>
                                <li>Game Design and Development</li>
                                <li>Game Design and Engineering</li>
                                <li>Games Development Project (Dissertation)</li>
                                <li>Mobile Applications Development</li>
                                <li>Modelling and Simulation</li>
                                <li>Object Oriented Design and Development</li>
                                <li>Systems Analysis and Design</li>
                            </ul>
                        </div>
                    )
                }, {
                    key: 2,
                    timeframe: 'September 2011 – June 2013',
                    title: 'BTEC National Diploma in IT – Triple Distinction',
                    subtitle: 'Halesowen College',
                    body: ''
                }
            ]
        }
    }

    render() {
        return (
            <div id='education'>
                <Experiences title='Education' experiences={this.state.experiences}/>
            </div>
        )
    }
}

export default Education;