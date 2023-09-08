import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import data from './data';

function App() {
  const [notes, setNotes] = useState(data);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [archivedNotes, setArchivedNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, { id: Date.now(), ...newNote }]);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const handleEditNote = (note) => {
    setSelectedNote(note);
  };


  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  

  const handleArchiveNote = (noteId) => {
    const archivedNote = notes.find((note) => note.id === noteId);
    setArchivedNotes([...archivedNotes, archivedNote]);
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };
  return (
    <div className="App">
      <h1>My Personal Notes</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <NoteList
        notes={filteredNotes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
        onArchive={handleArchiveNote}
      />
      <NoteForm
        onAdd={handleAddNote}
        onUpdate={handleUpdateNote}
        selectedNote={selectedNote}
      />
      <h2>Arsip</h2>
      <NoteList notes={archivedNotes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;