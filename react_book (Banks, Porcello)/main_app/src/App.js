import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './Redux/simple/store'

import TopPanel  from './__components/TopPanel';


const App = () =>
    <Provider store={store}>
        <div className="app">
            <TopPanel />
        </div>
    </Provider>

export default App;