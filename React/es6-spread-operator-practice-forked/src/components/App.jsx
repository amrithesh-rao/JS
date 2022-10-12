import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  function updateState(e) {
    var txt = e.target.value;
    setText(txt);
  }
  function addToArray(e) {
    setArr([...arr, text]);
    setText("");
    console.log(arr);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateState} type="text" />
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
