import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

// import { Page } from '../Page';
import { PageError } from '../PageError';
import { PageAboutUs } from '../PageAboutUs';
import { PageCalendar } from '../PageCalendar';
import { PageContacts } from '../PageContacts';


export const MenuRouter = () =>
    <HashRouter>
        <Switch>
            {/* <Route exact path='/' component={Page} /> */}
            <Route path='/calendar' component={PageCalendar} />
            <Route path='/about' component={PageAboutUs} />
            <Route path='/contacts' component={PageContacts} />
            <Redirect from='/' to='/about' />
            <Route component={PageError} />
        </Switch>
    </HashRouter>