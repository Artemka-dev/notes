import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

import Form from 'react-bootstrap/Form';
import { Button} from "react-bootstrap";

import Context from "../context";

function Notes(props) {
    function submitHandler(event) {
        event.preventDefault();

        props.deleteAll()
    }

    const {text} = React.useContext(Context);
    
    return(
        <div>
            { props.notes.map((note, index) => {
                if (note.title.includes(text)) {
                    return <Item key={note.id} note={note} index={index} pos={note.title.search(text)} />
                }
            })}

            <Form onSubmit={submitHandler}>
                <button className="button" type="submit">Удалить все выбранные элементы</button>
            </Form>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    deleteAll: PropTypes.func
}

export default Notes;