import React, { Component } from 'react';

import HiddenMessage from '../hiddenMessage';

class HiddenMessages extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                'the first messages',
                'the second messages',
                'the third messaged',
                'THE TEXT'
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let {showing, messages} = this.state;
            showing = (++showing >= messages.length) ?
                -1:
                showing
            this.setState({showing})
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {messages, showing} = this.state;
        return (
            <div className="hidden-messages">
                {messages.map((message, i) =>
                    <HiddenMessage key={i} hide={(i!==showing)}>
                        {message}
                    </HiddenMessage>
                )}
            </div>
        )
    }
}

export default HiddenMessages;