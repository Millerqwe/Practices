import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { addNewChat } from '../../store/actions/actionCreators';
import { ChatList } from '../layouts/ChatList';


const ChatListContainer = ({ chats, addNewChat, directToChat }) => {
    let chatID =  Object.keys(chats).length + 1;
    
    const onAddNewChat = (newChatName) => {
        addNewChat(chatID, newChatName);
        directToChat(chatID);
    }
    return <ChatList chats={chats} onAddNewChat={onAddNewChat}/>
}
    

const mapStateToProps = (store) => ({
    chats: store.chats
});
const mapDispatchToProps = (dispatch) => ({
    addNewChat: (chatID, newChatName) => dispatch(addNewChat(chatID, newChatName)),
    directToChat: (chatID) => dispatch(push(`/chat/${chatID}`))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatListContainer)