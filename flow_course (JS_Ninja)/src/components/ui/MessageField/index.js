import React from 'react';
import { Grid, InputBase } from '@material-ui/core';


export const MessageField = ({ text, onChangeText, onHandleKeyPress }) => 
    <Grid item xs={11}>
        <InputBase 
            className="message__field form__field"
            fullWidth={true}
            required={true}
            value={text}
            onChange={onChangeText}
            onKeyPress={onHandleKeyPress} />
    </Grid>