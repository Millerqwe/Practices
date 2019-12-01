import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Country from '../country';

class CountryList extends Component {
        constructor() {
        super();
        this.state = {
            countryNames: [],
            loading: false
        };
    }
    
    componentDidMount() {
    this.setState({loading: true});
    fetch('https://restcountries.eu/rest/v1')
        .then(response => response.json())
        .then(json => json.map(country => country.name))
        .then(countryNames => this.setState({
            countryNames,
            loading: false
        }));
    }

    render() {
        const {countryNames, loading} = this.state;

        return <div>
            {(loading) ?
                <span>Loading...</span> :
                (countryNames) ?
                    countryNames.map( (name, i) => <Country key={i} name={name}/>) :
                    <span>No countries</span>
            }
        </div>
      }
}

export default CountryList;