import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';
import Navbar from 'components/organisms/navbar';
import ContactInfoPanel from 'components/organisms/contact-info-panel';

function Application() {
    return (
        <div>
            <Navbar/>
            <div className="lr-o-site-wrap">
                <Grid.Wrapper className="lr-o-grid--spaced">
                    <Grid.Item>
                        <ContactInfoPanel/>
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