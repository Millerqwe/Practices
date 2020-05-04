import React from 'react';
import { PropTypes } from 'prop-types';


const AddColorForm = ({ onAddColor }) => {
    let title, code;

    const submit = (evt) => {
        evt.preventDefault();

        onAddColor(title.value, code.value);

        title.value = "";
        code.value = "";
        title.focus();
    }

    return (
        <form className="color__form" onSubmit={submit}>
            <input ref={input => title = input} type="text" placeholder="write the name of a new color" required/>
            <input ref={input => code = input} type="color" required/>
            <input type="submit" value="ADD"/>
        </form>
    )
}


AddColorForm.propTypes = {
    addColor: PropTypes.func
};

export default AddColorForm;