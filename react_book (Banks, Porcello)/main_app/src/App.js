import React from 'react';
import './App.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {color, colors} from './__store/reducers';

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