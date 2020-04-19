import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { Header } from '../Header';
import ChatsListContainer from '../../containers/ChatListContainer';
import ContentContainer from '../../containers/ContentContainer';


export const Layout = () =>
    <Container maxWidth="md">
        <Grid container>
            <Header />
            <ChatsListContainer />
            <ContentContainer />
        </Grid>
    </Container>