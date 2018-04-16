import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';
import Navbar from 'components/organisms/navbar';
import ContactInfoPanel from 'components/organisms/contact-info-panel';
import PersonalStatementPanel from 'components/organisms/personal-statement-panel';
import ExperiencePanel from 'components/organisms/experience-panel';

function Application() {
    return (
        <div>
            <Navbar/>
            <div className='lr-o-site-wrap'>
                <Grid.Wrapper className='lr-o-grid--spaced'>
                    <Grid.Item>
                        <ContactInfoPanel/>
                    </Grid.Item>
                    <Grid.Item>
                        <PersonalStatementPanel/>
                    </Grid.Item>
                    <Grid.Item>
                        <ExperiencePanel/>
                    </Grid.Item>
                </Grid.Wrapper>
            </div>
        </div>
    );
}

render(
    <Application/>, document.getElementById('container'));