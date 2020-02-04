import React from "react";

import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from "react-bootstrap";

import PropTypes from "prop-types";

function FormNotes({ addNote }) {
    const [value, setValue] = React.useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            addNote(value);
            setValue('')
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Введите название заметки" value={value} onChange={event => setValue(event.target.value)} />
                </Col>
                <Col>
                    <Button type="submit" variant="outline-info">Создать заметку</Button>
                </Col>
            </Row>
            <br/>
        </Form>
    );
}

FormNotes.propTypes = {
    addNote: PropTypes.func
}

export default FormNotes;