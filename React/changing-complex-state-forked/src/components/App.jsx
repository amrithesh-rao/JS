import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function updateFunc(e) {
    const { value, name } = e.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input onChange={updateFunc} name="fName" placeholder="First Name" />
        <input onChange={updateFunc} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
