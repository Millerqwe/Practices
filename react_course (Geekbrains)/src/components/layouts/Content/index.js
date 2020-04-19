import React from 'react';
import { Grid } from '@material-ui/core';

import { Messages } from '../../ui/Messages';
import { MessageForm } from '../../ui/MessageForm';


export const Content = ({ messages }) =>
    <Grid item xs={10} className="chat">
        {
            (messages.length === 0) ?
                <p className='text--align--center'>Сообщений пока нет</p> :
                <Messages messages={messages}/>
        }
        <MessageForm />
    </Grid>