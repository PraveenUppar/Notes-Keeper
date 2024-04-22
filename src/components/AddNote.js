import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Add a new note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
