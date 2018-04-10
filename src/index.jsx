import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/card';
import Grid from 'components/grid';
import Navbar from 'components/navbar';

function Application() {
    return (
        <div>
            
            <Navbar/>
            <div className="lr-o-site-wrap">
                <Grid.Wrapper className="lr-o-grid--spaced">
                    <Grid.Item>
                        <Card className="lr-c-card--grey">
                            <Grid.Wrapper className="lr-o-grid--spaced">
                                <Grid.Item className="lr-u-2/3@lg lr-u-1/2@md lr-u-soft-left">
                                    <Grid.Wrapper className="lr-o-grid--spaced">
                                        <Grid.Item>
                                            <h2>Luke Robinson</h2>
                                            <h3>Game and Software Developer</h3>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <h4>Phone:</h4>
                                            <p>07570809503</p>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <h4>Email:</h4>
                                            <p>robinsonlm@live.co.uk</p>
                                        </Grid.Item>
                                    </Grid.Wrapper>
                                </Grid.Item>
                                <Grid.Item className="lr-u-1/3@lg lr-u-1/2@md">
                                    <img className="lr-u-fill-width" src={require('assets/images/horse_mask.jpg')}></img>
                                </Grid.Item>
                            </Grid.Wrapper>
                        </Card>
                    </Grid.Item>
                    <Grid.Item>
                        <Card className="lr-c-card--grey">
                            <h1 className="lr-u-text-align-center">Hello!</h1>
                            <p className="lr-u-soft-bottom">
                                I am a Software Developer and Game Developer. I've worked as a Gameplay
                                Programmer, and also as a Full Stack Web Developer. I've used C#, Java, and
                                JavaScript, alongside Unity, XNA/MonoGame, Angularjs, React, and Dropwizard.
                            </p>
                            <p className="lr-u-soft-bottom">
                                I am currently seeking a role in the Games Industry. I have an interest in
                                gameplay programming, but am more than capable on the UI or back-end of a game
                                also.
                            </p>
                            <p>
                                I've also got some interest in web, as you can see by looking at this page! It's
                                responsive, too!
                            </p>
                        </Card>
                    </Grid.Item>
                </Grid.Wrapper>
            </div>
        </div>
    );
}

render(
    <Application/>, document.getElementById('container'));