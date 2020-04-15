import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from './reducers';
import { autoAnswerMiddleware } from 'middlewares/answerBot';


export const history = createBrowserHistory();

const persistConf = {
    key: 'root',
    storage
};

export function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConf, reducers(history)),
        initialStore,
        compose(
            applyMiddleware(logger, autoAnswerMiddleware, routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    const persistor = persistStore(store)
    
    return {store, persistor};
}