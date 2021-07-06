import React, { useState } from "react";
import "../style.css";

const InputUsername = ({ selectUserName }) => {
  const [name, setName] = useState("");

  return (
    <div className="inputBox">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="input"
        placeholder="enter your name"
      />
      <button className="btn" onClick={() => selectUserName(name)}>
        Enter
      </button>
    </div>
  );
};

export default InputUsername;
