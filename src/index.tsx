import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TopTrumps from './TopTrumps'


ReactDOM.render(
    <React.StrictMode>
        <TopTrumps />
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
