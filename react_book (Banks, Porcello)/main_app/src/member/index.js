import React from 'react';


const Member = ({ email, picture, name, location }) => 
    <li className="member">
        <p className="member__name">{name.last}</p>
        <p className="member__email">{email}</p>
        <p className="member__picture">
            <img src={picture.thumbnail} alt="avatar member"/>
        </p>
        <p className="member__location">{location.state}</p>
    </li>

export default Member;