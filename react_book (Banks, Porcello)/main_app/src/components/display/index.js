import { React, Children } from 'react';

const Display = ({ ifThruthy=true, children }) => 
    (ifThruthy) ? 
        Children.only(children) :
        null
;

export default Display;