import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Content } from '../layouts/Content';
import { ChatContext } from '../../context'


const ContentContainer = ({ chats }) => {
    let { chatID } = useContext(ChatContext);

    return (chatID && (chatID in chats)) ? 
        <Content messages={chats[chatID].messages} /> :
        <p className='text--align--center'>Выберите чат</p>
        
}

const mapStateToProps = (store) => ({
    chats: store.chats
});


export default connect(
    mapStateToProps
)(ContentContainer)