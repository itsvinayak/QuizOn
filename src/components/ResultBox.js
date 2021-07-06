import React from "react";
import "../style.css";

let scoreName = ["Very Poor", "Poor", "Bad", "Good", "Strong", "Very Strong"];

const Result = ({ score, playAgain, name }) => (
  <div className="score-board">
    <div className="score">
      <b> {name} </b> you are <b> {scoreName[score]} </b>, you have{" "}
      <b>{score}</b>/ 5 correct answer ! ! !
    </div>

    <button className="playBtn" onClick={playAgain}>
      Play Again
    </button>
  </div>
);

export default Result;
