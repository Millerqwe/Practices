import React from 'react';

import { PageMenu } from '../PageMenu';


export const PageContent = ({ children }) => 
    <>  
        <PageMenu/>
        { children }
    </>