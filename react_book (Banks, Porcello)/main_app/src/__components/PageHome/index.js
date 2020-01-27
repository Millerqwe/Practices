import React from 'react';
import { Link } from 'react-router-dom';


export const PageHome = () =>
    <section className='page__home'>
        <Link to='/calendar'>[Calendar]</Link>
        <Link to='/about'>[About Us]</Link>
        <Link to='/contacts'>[Contacts]</Link>
    </section>