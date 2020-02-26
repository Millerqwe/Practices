import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './Redux/simple/store'


const App = () =>
    <Provider store={store}>
        <div className="app">
        </div>
    </Provider>

export default App;