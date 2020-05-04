import React, { Component } from 'react';

class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(evt) {
        const {_title, _color} = this.refs;
        evt.preventDefault();
        console.log(_title.value, _color.value);
        _title.value = '';
        _color.vaule = '#000000';
        _title.focus();
    }
    
    render() {
        return <>
        {/* onSubmit={evt => evt.preventDefault()} */}
            <form onSubmit={this.submit}> 
                <input ref="_title" type="text" placeholder="Write the color name" required/>
                <input ref="_color" type="color" required/>
                <input type="submit" value="Отправить"/> 
            </form>
        </>;
    }
};

export default AddColorForm;