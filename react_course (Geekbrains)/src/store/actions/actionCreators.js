import { store } from '../index';
import { ACTIONS } from './actions';

import "@babel/polyfill";


export const addNewChat = (chatID, newChatName) => ({
    type: ACTIONS.ADD_NEW_CHAT,
    chatID,
    newChatName,
    messages: []
})

export const addNewMessage = (chatID, author, text) => ({
        type: ACTIONS.ADD_NEW_MESSAGE,
        chatID,
        author,
        text
})

const chatsLoadRequest = () => ({
    type: ACTIONS.CHATS_REQUEST,
    isLoading: true
});

const chatsLoadSuccess = (chats) => ({
    type: ACTIONS.CHATS_SUCCESS,
    isLoading: false,
    chats
})

const chatsLoadFail = (error) => ({
    type: ACTIONS.CHATS_FAIL,
    isLoading: false,
    error
})


export const chatsLoad = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequest());
            const result = await fetch('/api/chats.json');
            dispatch(chatsLoadSuccess(await result.json()));
        } catch(error) {
            dispatch(chatsLoadFail(error))
        }
    }
}