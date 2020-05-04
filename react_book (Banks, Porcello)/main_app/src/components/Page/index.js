import React from 'react';

import { PageMenu } from '../PageMenu';
import { PageContent } from '../PageContent';


export const Page = () =>
    <section className='page__home'>
        <PageMenu />
        <PageContent />
    </section>