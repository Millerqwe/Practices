import { ACTIONS } from 'actions/actions';
import { addNewMessage } from 'actions/actionCreators';
import { botMessages } from 'helper/testData';


export function autoAnswerMiddleware(store) {
    return function(next) {
        return function(action) {
            if (action.type === ACTIONS.ADD_NEW_MESSAGE && action.author !== 'Bot') {   
                let randomIndex = Math.floor(Math.random() * botMessages.length) + 0;
                setTimeout(
                    () => store.dispatch(addNewMessage(action.chatID, 'Bot', botMessages[randomIndex])),
                    600
                );
            }
            return next(action);
        }
    }
}