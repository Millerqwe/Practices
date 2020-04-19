import React, { useState, useContext } from 'react';
import { Grid } from '@material-ui/core';

import { ChatContext, MessageContext } from '../../../context';
import { MessageField } from '../MessageField';
import { AddButtonMessage } from '../AddMessageButton';


export const MessageForm = () => {
    let [text, setText] = useState('');
    let { chatID } = useContext(ChatContext);
    let { handleSubmit, handleKeyPress } = useContext(MessageContext);
        
    let onChangeText = (evt) => {
        setText(evt.target.value);
    };

    let onHandleSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit(chatID, text);
        setText('');
    }

    let onHandleKeyPress = (evt) => {
        if (evt.key === 'Enter' && evt.charCode === 13) {
            handleKeyPress(evt, chatID, text);
            setText('');
        }
    };
    
    return <>
            <Grid container 
            className="form" 
            component='form'  
            alignItems='stretch' 
            alignContent='space-between' 
            onSubmit={onHandleSubmit}
        >  
            <MessageField text={text} onChangeText={onChangeText} onHandleKeyPress={onHandleKeyPress}/>
            <AddButtonMessage/>
        </ Grid>
    </>
}