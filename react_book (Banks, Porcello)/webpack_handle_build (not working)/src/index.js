import React from 'react';
import { render } from 'react-dom';

import { data } from '../data';
import Menu from './menu';


window.React = React;
render(
    <Menu recipes={data}/>,
    document.querySelector('.react-container')
);
