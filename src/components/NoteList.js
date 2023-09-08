import React from 'react';

const NoteList = ({ notes, onDelete, onEdit, onArchive }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => onDelete(note.id)}>Hapus</button>
          <button onClick={() => onEdit(note)}>Ubah</button>
          <button onClick={() => onArchive(note.id)}>Arsipkan</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

// const NoteList = ({ notes, onDelete, onEdit, onArchive, onRestore, archived }) => {
//     return (
//       <ul>
//         {notes
//           .filter((note) => note.active === archived)
//           .map((note) => (
//             <li key={note.id}>
//               {note.text}
//               <button onClick={() => onDelete(note.id)}>Hapus</button>
//               <button onClick={() => onEdit(note)}>Ubah</button>
//               {archived ? (
//                 <button onClick={() => onRestore(note.id)}>Kembalikan</button>
//               ) : (
//                 <button onClick={() => onArchive(note.id)}>Arsipkan</button>
//               )}
//             </li>
//           ))}
//       </ul>
//     );
//   };
  
  
//   export default NoteList;
