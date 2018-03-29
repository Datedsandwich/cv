import React from 'react';
import { render } from 'react-dom';
import 'sass/main.scss';

import Card from 'components/card';

function Application() {
    return (
        <Card className="rp-c-card--dark">
            <h1>Hello</h1>
            <p>I was rendered from the Card component.</p>
        </Card>
    );
}

render(<Application />, document.getElementById('container'));