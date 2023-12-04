import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import ticketsReducer from './reducers/ticketsReducer';
import { fetchToken } from './actions/tokenAcitons';
import axiosApi from '../axiosApi';
import tokenReducer from './reducers/tokenReducer';
import filtersReducer from './reducers/filtersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    tickets: ticketsReducer,
    token: tokenReducer,
    filters: filtersReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchToken());

axiosApi.interceptors.request.use(config => {
    const token = store.getState().token.searchToken;
    if (token) {
        try {
            const separator = config.url.includes('?') ? '&' : '?';
            // eslint-disable-next-line no-param-reassign
            config.url += `${separator}searchId=${token}`;
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }

    return config;
});

export default store;
