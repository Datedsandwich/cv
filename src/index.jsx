import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/card';
import Grid from 'components/grid';

function Application() {
    return (
        <Card className="rp-c-card--dark">
            <Grid className="rp-o-grid--gutter rp-o-grid--trench">
                <div className="rp-o-grid__item rp-u-1/3@md">
                    <img className="rp-u-fill-width" src={require('images/horse_mask.jpg')}></img>
                </div>
                <div className="rp-o-grid__item rp-u-1/3@md">
                    <h1>Hello</h1>
                    <p>I am a Software Developer and Game Developer. I've worked as a Gameplay
                        Programmer, as also as a Full Stack Web Developer. I've used C#, Java, and
                        JavaScript, alongside Unity, XNA/MonoGame, Angularjs, React, and Dropwizard.</p>
                </div>
                <div className="rp-o-grid__item rp-u-1/3@md">
                    <h3>Available For:</h3>
                    <ul>
                        <li>Front-End Web Development</li>
                        <li>Back-End Web Development</li>
                        <li>Gameplay Programming</li>
                        <li>Unity Development</li>
                    </ul>
                </div>
            </Grid>
        </Card>
    );
}

render(
    <Application/>, document.getElementById('container'));