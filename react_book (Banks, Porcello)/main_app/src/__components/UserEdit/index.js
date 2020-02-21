import React from 'react';
import {connect} from 'react-redux';

import { setName } from '../../store/actionCreators';


const UserEdit = (props) => {
    function setName(data) {       
        props.setName(data.target.value);   
    }

    return (       
        <div>           
            <p>
                Name: <input type="text" value={props.name}  onChange={setName}/></p>           
            <p>
                Age: <input type="text" value={props.age} />
            </p>       
        </div>   
    )
}

export default connect(
    store => store.user
)(UserEdit);