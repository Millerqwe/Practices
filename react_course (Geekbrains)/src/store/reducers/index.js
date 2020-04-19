import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {chatsReducer} from './chats';
import {authorReducer} from './authors';


export const reducers = (history) => combineReducers({
    chats: chatsReducer,
    author: authorReducer,
    router: connectRouter(history)
})