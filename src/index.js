/* global Office */
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

/* Render application after Office initializes */
Office.initialize = () => {
    render(App);
};

/* Initial render showing a progress bar */
render(App);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
