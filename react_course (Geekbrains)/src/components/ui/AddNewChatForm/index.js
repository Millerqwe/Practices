import React, { useState } from 'react';
import { InputBase, Divider } from '@material-ui/core';

import { AddNewChatButton } from '../AddNewChatButton';



export const AddNewChatForm = ({ onAddNewChat }) => {
    let [chatName, setChatName] = useState('');

    let changeChatName = (evt) => {
        setChatName(evt.target.value);
    };

    let addNewChat = () => {
        onAddNewChat(chatName);
        setChatName('');
    };
    
    return <>
        <div className="chat__add-new-form">
            <InputBase
                className="text--size--item"
                type='text'
                value={chatName}
                onChange={changeChatName}
                placeholder="Новый чат" 
                inputProps={{ 'aria-label': 'Новый чат' }}
                required
            />
            <Divider orientation='vertical' />
            {
                (chatName) ? 
                    <AddNewChatButton onAddNewChat={addNewChat} /> :
                    null
            }
            
        </div>
    </> 
}
