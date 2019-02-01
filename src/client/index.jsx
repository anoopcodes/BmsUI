import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementByTagName('base')[0].getAttribute('href');
const history = createHistory({ baseName: baseUrl });

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <connectedRouter history={history}>
            <App />
            </connectedRouter>
    </Provider>,rootElement
);

registerServiceWorker();