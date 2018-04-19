import React from 'react';

import Section from 'components/atoms/Section';

function PersonalStatement() {
    return (
        <Section title='Hello!'>
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
        </Section>
    )
}

export default PersonalStatement;