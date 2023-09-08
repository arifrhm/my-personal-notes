import React, { useState } from 'react';

const NoteForm = ({ onAdd, onUpdate, selectedNote }) => {
  const [text, setText] = useState(selectedNote ? selectedNote.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedNote) {
      onUpdate({ id: selectedNote.id, text });
    } else {
      onAdd({ text });
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan catatan..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{selectedNote ? 'Simpan' : 'Tambah'}</button>
    </form>
  );
};

export default NoteForm;
