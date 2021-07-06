import React from "react";
import "../style.css";

const LevelSelection = ({ selectedLevel }) => {
  return (
    <div className="levelBox">
      <button className="level" onClick={() => selectedLevel("easy")}>
        easy
      </button>
      <button className="level" onClick={() => selectedLevel("medium")}>
        medium
      </button>
      <button className="level" onClick={() => selectedLevel("hard")}>
        hard
      </button>
    </div>
  );
};

//31:40/38:24

export default LevelSelection;
