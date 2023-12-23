import React, { useState } from 'react';

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('Trabajo');

  const handleSave = () => {
    onSave({ title, content, type });
    setTitle('');
    setContent('');
    setType('Trabajo');
  };

  const handleContentChange = (e) => {
    const inputText = e.target.value.slice(0, 4000);
    setContent(inputText);
  };

  const characterCount = content.length; // Obtener la longitud del contenido

  return (
    <div className="note-container">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-large" />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        maxLength={4000}
        cols="30"
        rows="10"
        className="input-large"
      />
      <div className="character-counter">{characterCount}/4000</div>
      <select value={type} onChange={(e) => setType(e.target.value)} className="input-large">
        <option value="Trabajo">Trabajo</option>
        <option value="Estudios">Estudios</option>
        <option value="Viajes">Viajes</option>
        <option value="Deportes">Deportes</option>
      </select>
      <button onClick={handleSave} className="btn-large">Create Note</button>
    </div>
  );
};

export default NoteForm;
