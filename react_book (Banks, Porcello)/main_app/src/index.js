import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Countdown  from './__components/Flux/Countdown';
// import CountdownStore from './__components/Flux/countdownStore'
// import countdownActions from './__components/Flux/countdownActions';
// import CountdownDispatcher from './__components/Flux/countdownDispatcher'


// const appDispatcher = new CountdownDispatcher();
// const actions = countdownActions(appDispatcher);
// const store = new CountdownStore(10, appDispatcher);

// const render = count => ReactDOM.render(
    // <Countdown count={count} {...actions}/>,
//     document.getElementById('root')
// );

// store.on('TICK', () => render(store.count));
// store.on('RESET', () => render(store.count));
// render(store.count);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
