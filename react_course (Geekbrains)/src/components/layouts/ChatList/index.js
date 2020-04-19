import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, ListItem, Button } from '@material-ui/core';

import { AddNewChatForm } from '../../ui/AddNewChatForm';



export const ChatList = ({ chats, onAddNewChat }) =>
    <Grid item xs={2} className='chat__list'>
        <List>
            {
                Object.entries(chats).map( ([id, chat]) =>
                    <ListItem key={id}>
                        <Link to={`/chat/${id}`} className="chat__link text--size--item">
                            <Button fullWidth={true}>                                
                                {chat.name || "???"} 
                            </Button>
                        </Link>
                    </ListItem>
                )
            }
        </List>
        <AddNewChatForm onAddNewChat={onAddNewChat}/>
    </Grid>