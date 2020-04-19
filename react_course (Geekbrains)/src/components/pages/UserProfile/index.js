import React from 'react';
import { Link } from 'react-router-dom';


export const UserProfile = ({ name, age, sex }) =>
    <div>
        <p>{ name }</p>
        <p>{ age }</p>
        <p>{ sex }</p>
        <Link to='/'>Вернуться на главную</Link>
    </div>