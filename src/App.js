import React from 'react';
import './App.css';

import PropTypes from "prop-types";

import FormNotes from "./components/Form";
import Notes from "./components/Notes";

import Context from "./context";

function App() {
    const [notes, setNotes] = React.useState([
        { id: 1, completed: false, title: "Купить хлеб" },
        { id: 2, completed: false, title: "Купить масло" },
        { id: 3, completed: false, title: "Купить сыр" },
        { id: 4, completed: false, title: "Купить молоко" }
    ]);


    function on_change(id) {
        setNotes(notes.map(note => {
            if (note.id === id) { note.completed = !note.completed }
            return note;
        }))
    }

    function removeNote(id) {
        setNotes(notes.filter(note => note.id !== id));
    }

    function addNote(title) {
        setNotes(notes.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    function deleteAll() {
        setNotes(notes.filter(note => !note.completed))
    }

    return (
        <Context.Provider value={{ on_change, removeNote, addNote }}>
            <div className="container col-8 mt-5">
                <h1 className="mb-4">Приложение заметки</h1>
                <FormNotes addNote={addNote} />

                {notes.length ?
                    <Notes notes={notes} deleteAll={deleteAll} />
                    : <h5>У вас нет заметок</h5>
                }

            </div>
        </Context.Provider>
    );
}

App.propTypes = {
    on_change: PropTypes.func,
    change_out: PropTypes.func
}

export default App;
