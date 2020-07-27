import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import {color, colors} from './store/reducers';
import './App.css';

const App = () => {
    let store = createStore(
        combineReducers(
            color,
            colors
        )
    );

    return <Provider store={store}>
        <div className="app">
            Hello
        </div>
    </Provider>
}


export default App;