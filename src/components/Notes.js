import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

import Form from 'react-bootstrap/Form';
import { Button} from "react-bootstrap";

function Notes(props) {
    function submitHandler(event) {
        event.preventDefault();

        props.deleteAll()
    }
    
    return(
        <div>
            { props.notes.map((note, index) => {
                return <Item note={note} key={note.id} index={index} />
            })}

            <Form onSubmit={submitHandler}>
                <Button className="button" type="submit">Удалить все выбранные элементы</Button>
            </Form>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    deleteAll: PropTypes.func
}

export default Notes;