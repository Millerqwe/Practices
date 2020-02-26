import React from 'react';
import {connect} from 'react-redux';

import { setName } from '../../Redux/simple/actions';


const UserEdit = (props) => {
    function setName(data) {       
        props.setName(data.target.value);   
    }

    return (       
        <div>           
            <p>
                Name: <input type="text" value={props.name}  onChange={setName}></input>
            </p>           
            <p>
                Age: <input type="text" value={props.age}></input>
            </p>       
        </div>   
    )
}

export default connect(
    store => store.user
)(UserEdit);