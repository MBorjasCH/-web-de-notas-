import React from 'react';

const NoteList = ({ notes, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <h2>Notes List</h2>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>Type: {note.type}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;


