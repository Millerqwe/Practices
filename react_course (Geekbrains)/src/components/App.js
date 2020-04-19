'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { Layout } from './layouts/Layout';
import { Http404 } from './pages/Http404';
import { UserProfile } from './pages/UserProfile';

import '../static/style.css';
import { initStore, history } from '../store';
import { ChatContext, MessageContext } from '../context'

import { addNewMessage } from '../store/actions/actionCreators';


export const App = () => {
    const {store, persistor} = initStore();

    let author = store.getState().author.name; //hard data

    const handleSubmit = (chatID, text) => {
        store.dispatch(addNewMessage(chatID, author, text));
    }

    const handleKeyPress = (chatID, text) => {
        store.dispatch(addNewMessage(chatID, author, text));
    }

    const messanger = (props) => {
        let chatID = parseInt(props.match.params.id);

        return <ChatContext.Provider value={{ chatID }}>
            <Layout {...props}/>
        </ChatContext.Provider>
    };

    return <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <MessageContext.Provider value={{
                            handleSubmit,  
                            handleKeyPress
                        }}>
                        <Switch>
                            <Route exact path='/' render={messanger}></Route>
                            <Route path='/chat/:id(\d+)' render={messanger}></Route>
                            <Route path='/profile' render={
                                (props) => <UserProfile {...props} {...store.getState().author}/>
                            }>
                            </Route>
                            <Route component={Http404}></Route>
                        </Switch>
                    </MessageContext.Provider>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);