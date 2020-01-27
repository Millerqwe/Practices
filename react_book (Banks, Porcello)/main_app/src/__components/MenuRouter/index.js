import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { PageHome } from '../PageHome';
import { PageAboutUs } from '../PageAboutUs';
import { PageCalendar } from '../PageCalendar';
import { PageContacts } from '../PageContacts';


export const MenuRouter = () =>
    <HashRouter>
        <Route exact path='/' component={PageHome} />
        <Route path='/calendar' component={PageCalendar} />
        <Route path='/about' component={PageAboutUs} />
        <Route path='/contacts' component={PageContacts} />
    </HashRouter>