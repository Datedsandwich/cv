import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/card';
import Grid from 'components/grid';
import GridItem from 'components/grid-item';
import Navbar from 'components/navbar';

function Application() {
    return (
        <div>
            <Navbar/>
            <div className="lr-o-site-wrap">
                <Grid className="lr-o-grid--spaced lr-o-grid--match-height">
                    <GridItem className="lr-u-1/3@lg lr-u-1/2@md">
                        <Card className="lr-c-card--dark lr-u-fill-height">
                            <img className="lr-u-fill-width" src={require('assets/images/horse_mask.jpg')}></img>
                        </Card>
                    </GridItem>
                    <GridItem className="lr-u-2/3@lg lr-u-1/2@md">
                        <Card className="lr-c-card--dark lr-u-fill-height">
                            <Grid className="lr-o-grid--spaced">
                                <GridItem className="lr-u-1/2@xs">
                                    <h1>Hello</h1>
                                    <p>I am a Software Developer and Game Developer. I've worked as a Gameplay
                                        Programmer, and also as a Full Stack Web Developer. I've used C#, Java, and
                                        JavaScript, alongside Unity, XNA/MonoGame, Angularjs, React, and Dropwizard.</p>
                                </GridItem>
                                <GridItem className="lr-u-1/2@xs">
                                    <h3>Available For:</h3>
                                    <ul>
                                        <li>Front-End Web Development</li>
                                        <li>Back-End Web Development</li>
                                        <li>Gameplay Programming</li>
                                        <li>Unity Development</li>
                                    </ul>
                                </GridItem>
                            </Grid>
                        </Card>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
}

render(
    <Application/>, document.getElementById('container'));