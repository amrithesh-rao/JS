import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value
    });

    console.log(note);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addNote(note);
          setNote({
            title: "",
            content: ""
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
