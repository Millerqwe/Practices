import React from 'react';

import Member from '../member';


class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            members: [],
            error: null
        }
    }

    static defaultProps = {
        count: 1
    }

    getFakeMembers(count) {
        return new Promise( (resolves, rejects) => {
          const api = `https://api.randomuser.me/?nat=US&results=${count}`;
          const request = new XMLHttpRequest();
          request.open('GET', api);
          request.onload = () => (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            rejects(Error(request.statusText))
          request.onerror = err => rejects(err);
          request.send();
        })
      }

    componentWillMount() {
        this.setState({loading: true});
        this.getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
                },
                error => {
                    this.setState({error, loading: false})
                }
        )
    }

    render() {
        const { loading, members, error } = this.state;

        return <ul className="members-list">
            {(loading) ?
                <p>Loading...</p> :
                (members.length) ?
                    members.map((member, i) => <Member key="i" {...member}/>) :
                    <p>There are no data about members</p>
                    
            }
            {(error) ? <p>There are errors - {error}</p> : ""}
        </ul>
    }
}

export default MemberList;