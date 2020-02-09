import React, { useEffect } from 'react';
import './App.css';

import PropTypes from "prop-types";

import FormNotes from "./components/Form";
import Notes from "./components/Notes"; 
import Loader from "./components/Loader";
import Search from "./components/Search";

import Context from "./context";

function App() {
    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState('');

    useEffect(() => {
        const _notes = localStorage.getItem("notes");
        setTimeout(() => {
            if (_notes) {setNotes(JSON.parse(_notes))}
            else {setNotes([])}
            setLoading(false);
        }, 1000)
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])


    function on_change(id) {
        setNotes(notes.map(note => {
            if (note.id === id) { note.completed = !note.completed }
            return note;
        }))
    }

    function removeNote(id) {
        setNotes(notes.filter(note => note.id !== id));
        setText('');
    }

    function addNote(title) {
        setNotes(notes.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
        setText('');
    }

    function deleteAll() {
        setNotes(notes.filter(note => !note.completed));
        setText('');
    }

    function changeText(event) {
        event.preventDefault();

        setText(event.target.value);
    }


    return (
        <Context.Provider value={{ on_change, removeNote, addNote, text }}>
            <div className="container col-sm-12 col-md-12 col-lg-10 col-xl-8 mt-5">
                <Search changeText={changeText} />
                <h1 className="mb-5">Приложение заметки</h1>
                <FormNotes addNote={addNote} />

                {loading && <Loader />}
                {notes.length ?
                    <Notes notes={notes} deleteAll={deleteAll} />
                    : loading ? null : <h5>У вас нет заметок</h5>
                }

            </div>
        </Context.Provider>
    );
}

App.propTypes = {
    on_change: PropTypes.func,
    change_out: PropTypes.func,
    add_note: PropTypes.func
}

export default App;
