import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';


const DataComponent = ( ComposedComponent,  url) => 
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false
            }
        }

        componentDidMount() {
            this.setState({loading: true})
            fetch(url)
            .then(responce => responce.json())
            .then(data => this.setState({data, loading: false}))
        }

        render() {
            return <div className="hoc-component">
                {(this.state.loading) ?
                    <div className="hoc-component__data--loading">Loading ...</div> :
                    <ComposedComponent {...this.state}/>
                }
            </div>
        }
    }

export default DataComponent;