import React from 'react';
// import PropTypes from 'prop-types';



const AddColorForm = () => {
    let _name, _color;
    const submit = (evt) => {
        evt.preventDefault();

        console.log(_name.value, _color.value);
        _name.value="";
        _color.value="";
        _name.focus();
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _name = input} type="text" placeholder="Write text"/>
            <input ref={input => _color = input} type="color"/>
            <input type="submit" value="Отправить форму"/>
        </form>
    )

}
    
export default AddColorForm;