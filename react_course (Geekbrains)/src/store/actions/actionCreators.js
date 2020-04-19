import { store } from '../index';
import { ACTIONS } from './actions';


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