import React from 'react';
import { render } from 'react-dom';
import 'sass/main.scss';

function Application() {
    return (
        <div>
            <h1>Hello</h1>
            <p>I was rendered from the Application component.</p>
        </div>
    );
}

render(<Application />, document.getElementById('container'));