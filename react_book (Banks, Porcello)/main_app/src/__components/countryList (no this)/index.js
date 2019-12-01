import React from 'react';
import Country from '../country';

const CountryList = ({ data }) => 
    data.results.map( (name, i) => <Country key={i} name={name}/>);
    
export default CountryList;