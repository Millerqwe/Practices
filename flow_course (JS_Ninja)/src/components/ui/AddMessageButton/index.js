import React from 'react';
import { Send } from '@material-ui/icons';
import { Grid, Button } from '@material-ui/core';


export const AddButtonMessage = () =>
    <Grid item xs={1} >
        <Button className="button button--add form__button" type="submit">
            <Send fontSize='large'/>
        </Button>
    </Grid>