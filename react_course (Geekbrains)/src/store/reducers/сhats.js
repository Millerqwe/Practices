import update from 'react-addons-update';

import { ACTIONS } from '../actions/actions';
import { chatsData } from '../../helper/testData';


const initialData = {
    ...chatsData,
};

export const chatsReducer = (chats=initialData, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_CHAT:
            return update(chats, {
                $merge: {
                    [action.chatID]: {
                        name: action.newChatName,
                        messages: action.messages
                    }
                }
            });
        case ACTIONS.ADD_NEW_MESSAGE:
            return update(chats, {
                [action.chatID]: {
                    messages: {$push: [{
                        author: action.author,
                        text: action.text
                    }]}
                }
            })
        default: return chats;
    }
}