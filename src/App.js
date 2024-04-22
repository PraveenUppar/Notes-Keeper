import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello, world :)",
      date: "Sat Apr 06 2024",
    },
    {
      id: nanoid(),
      text: "Create your note",
      date: "Sat Apr 06 2024",
    },
    {
      id: nanoid(),
      text: "Add your Note",
      date: "Sat Apr 06 2024",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  // To Store notes in local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        ></NotesList>
      </div>
    </div>
  );
};
export default App;
