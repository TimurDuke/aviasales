import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import store from './store/configureStore';

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
