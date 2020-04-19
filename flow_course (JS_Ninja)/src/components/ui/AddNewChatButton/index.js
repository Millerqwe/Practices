import React from 'react';
import { Add } from '@material-ui/icons';
import { Button } from '@material-ui/core';


export const AddNewChatButton = ({ onAddNewChat }) =>
    <Button color='secondary' onClick={onAddNewChat}>
        <Add />
    </Button>