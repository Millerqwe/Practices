import React from 'react';
import { Link } from 'react-router-dom';


export const PageHome = () =>
    <section className='page__home'>
        <nav className="page__navigation">
            <Link to='/calendar'>[Calendar]</Link>
            <Link to='/about'>[About Us]</Link>
            <Link to='/contacts'>[Contacts]</Link>
        </nav>
    </section>