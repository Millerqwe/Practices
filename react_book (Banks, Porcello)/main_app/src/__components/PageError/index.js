import React from 'react';


export const PageError= ({ location }) =>
    <section className="page__error--404">
        <p>
            {`This address is missid - ${location.pathname}`}    
        </p>
    </section>