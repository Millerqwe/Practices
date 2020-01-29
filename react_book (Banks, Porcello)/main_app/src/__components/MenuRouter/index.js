import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { PageHome } from '../PageHome';
import { PageError } from '../PageError';
import { PageAboutUs } from '../PageAboutUs';
import { PageCalendar } from '../PageCalendar';
import { PageContacts } from '../PageContacts';


export const MenuRouter = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={PageHome} />
            <Route path='/calendar' component={PageCalendar} />
            <Route path='/about' component={PageAboutUs} />
            <Route path='/contacts' component={PageContacts} />
            <Route component={PageError} />
        </Switch>
    </HashRouter>