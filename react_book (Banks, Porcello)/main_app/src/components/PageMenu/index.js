import React from 'react';

import { NavLink } from 'react-router-dom';


export const PageMenu = () => {
    
    let style = {
        backgroundColor: 'orange',
    }
    
    return <>
        <nav className="page__navigation">
            <NavLink to='/calendar' activeStyle={style}>[Calendar]</NavLink>
            <NavLink to='/about' activeStyle={style}>[About Us]</NavLink>
            <NavLink to='/contacts' activeStyle={style}>[Contacts]</NavLink>
        </nav>
    </>
};
    