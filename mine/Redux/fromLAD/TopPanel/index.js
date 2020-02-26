import React from 'react';
import {connect} from 'react-redux';


const TopPanel = (props) =>
    <div>
        Welcome {props.name}. Your age is {props.age}
    </div>

export default connect(
    function(store) {
        return store.user
    }
)(TopPanel);