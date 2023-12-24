import React, { useState } from 'react';
import NoteForm from './backend/components/NoteForm';
import NoteList from './backend/components/NoteList';
import FilterNotes from './backend/components/FilterNotes';
import Login from './backend/components/Login'; // Importa el componente Login
import './frontend/App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar la autenticación

  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleFilterChange = (filter) => {
    if (filter === 'all') {
      setFilteredNotes(notes);
    } else {
      const filtered = notes.filter((note) => note.type === filter);
      setFilteredNotes(filtered);
    }
  };

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="App">
      {!isLoggedIn ? ( // Si no está autenticado, muestra el componente Login
        <Login onLogin={handleLogin} />
      ) : (
        <div className="app-content">
          <div className="note-container">
            <h1>Notes App</h1>
            <NoteForm onSave={handleSaveNote} />
          </div>
          <div className="sidebar">
            <FilterNotes onFilterChange={handleFilterChange} />
            {/* Limita la cantidad de notas mostradas en la barra lateral */}
            <NoteList notes={filteredNotes.length > 0 ? filteredNotes.slice(0, 5) : notes.slice(0, 5)} onDelete={handleDeleteNote} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


