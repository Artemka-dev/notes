import React, { useContext } from "react";
import PropTypes from "prop-types";

import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";

import Context from "../context";

function Item({ note, index }) {
    const {on_change, removeNote} = useContext(Context);
    const classes = [];

    if (note.completed) {
        classes.push("done");
        classes.push("rotated");
    }
    return (
        <div className="note_card">
            <div className="flex-d">
                <span className={classes.join(' ')}>
                    <input checked={note.completed} type="checkbox" style={ {marginRight: '10px'} } onChange={() => on_change(note.id)} />
                    <strong>{index + 1})</strong>&nbsp;{note.title}
                </span>

                <Button variant="outline-primary" onClick={() => removeNote(note.id)}>&times;</Button>
                    
            </div>
        </div>
    );
}

Item.propTypes = {
    title: PropTypes.object,
    index: PropTypes.number,
    on_change: PropTypes.func
}

export default Item;