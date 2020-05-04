import React from 'react';

const Member = ({ name, email, location, picture }) =>
    <div className="member">
        <img className="member__picture" src={picture.thumbnail} alt="Фото пользователя"/>
        <h1 className="member__name">{name.first}</h1>
        <email className="member__email">{email}</email>
        <p className="member__location">{location.state} {location.city}</p>
    </div>

export default Member;