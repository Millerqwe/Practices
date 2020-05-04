import React from 'react';

import { PageContent } from '../PageContent';
 

export const PageError= ({ location }) =>
    <PageContent>
        <section className="page__error--404">
            <p>
                {`This address is missid - ${location.pathname}`}    
            </p>
        </section>
    </PageContent>