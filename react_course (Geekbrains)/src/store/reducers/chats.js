import update from 'react-addons-update';

import { ACTIONS } from '../actions/actions';


const initialData = {
    list: {},
    isLoading: false
};

export const chatsReducer = (chats=initialData, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_CHAT:
            return update(chats, { 
                list: {
                    $merge: {
                        [action.chatID]: {
                            name: action.newChatName,
                            messages: action.messages
                        }
                    }
                }    
            });
        case ACTIONS.ADD_NEW_MESSAGE:
            return update(chats, {
                list: { 
                    [action.chatID]: {
                        messages: {$push: [{
                            author: action.author,
                            text: action.text
                        }]}
                    }    
                }
            })
        case ACTIONS.CHATS_REQUEST:
            return {
                ...chats,
                isLoading: action.isLoading,
            }
        case ACTIONS.CHATS_SUCCESS:
            return {
                ...chats,
                list: {...action.chats},
                isLoading: action.isLoading,                
            }
        case ACTIONS.CHATS_FAIL:
            return {
                ...chats,
                isLoading: action.isLoading,
                error,
            }
        default: return chats;
    }
}