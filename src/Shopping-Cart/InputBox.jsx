import React from "react";
import "./App.css";

// function to take input from react using state
function InputBox() {
  const [content, setContent] = React.useState("");

  // funtion to show alert
  const showAlert = () => {
    alert("Input taken successfully 😄");
  };

  // function to change input
  const changeInput = (obj) => {
    const val = obj.target.value;
    console.log("Prev value : ", val);
    setContent(val);
    console.log("New value : ", val);
  };

  // function to clear the input
  const clearInput = (obj) => {
    console.log("Prev value : ", content);
    setContent("");
  };

  return (
    <div className="headingBox">
      <span className="heading">User Input</span>

      <div className="inputArea">
        <input
          className="textInput"
          type="text"
          value={content}
          onChange={changeInput}
        />

        <button className="btn" onClick={showAlert}>
          Submit
        </button>

        <button className="btn" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default InputBox;
