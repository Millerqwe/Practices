import React, { Component } from 'react';

import Member from '../Member';

const getMembers = count => new Promise( (resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => (request.status === 200) ? 
        resolves(JSON.parse(request.response).results) :  
        rejects(Error(request.statusText))
    request.onerror = err => rejects(err);
    request.send();
    ;
});

class MemberList extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    componentWillMount() {
        this.setState({loading: true});
        getMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
            },
            error => {
                this.setState({error, loading: false})
            }
        ); 
    }

    componentDidMount() {
        console.log('This component have mounted');
    }

    render() {
        const { members, loading, error } = this.state;
        return <div className="member-list">
            {(loading) ?
                <span>Loading...</span> :
                (members.length) ?
                    members.map((user, i) => <Member key={i} {...user}/>) :
                    <span>There are not users</span>
            }
            {(error) ? <p>Error loading Members</p> : ""}
        </div>
    }
}

export default MemberList;