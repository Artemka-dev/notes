import React from "react";

import PropTypes from "prop-types";

function FormNotes({ addNote }) {
    const [value, setValue] = React.useState('');

    function submitHandler(event) {

        if (event.key === "Enter") {
            if (value.trim()) {
                addNote(value);
                setValue('')
            }
        }
    }

    return (
        <input type="text" placeholder="Введите название заметки" 
            value={value} 
            onChange={event => setValue(event.target.value)} 
            onKeyPress={submitHandler} autoFocus={true} className="input" />
    );
}

FormNotes.propTypes = {
    addNote: PropTypes.func
}

export default FormNotes;