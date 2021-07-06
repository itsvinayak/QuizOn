import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import QuestionAPI from "./question/QuestionAPI";
import QuestionBox from "./components/QuestionBox";
import LevelSelection from "./components/levelSelectionBox";
import InputUsername from "./components/InputUsername";
import Result from "./components/ResultBox";

class Quiz extends Component {
  constructor() {
    super();
    this.timerVar = null;
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      count: 0,
      level: "",
      name: "",
    };
  }

  getQuestions = (level) => {
    // fetching question from api
    let question = QuestionAPI(level);
    return question;
  };

  selectUserName = (name) => {
    // callback function asking for name
    this.setState({
      name: name,
    });
  };

  selectedLevel = (level) => {
    // callback function for selecting levels
    this.setState({
      level: level,
      questionBank: this.getQuestions(level),
    });
  };

  playAgain = () => {
    // function for playing  again
    this.setState({
      score: 0,
      count: 0,
      level: "",
      responses: 0,
    });
  };

  computeAnswer = (answer, correctAns) => {
    // function to compute answers
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  timer = () => {
    // timer function: used for count down
    let temp = this.state.count + 1;
    if (temp <= 11) {
      this.setState({
        count: temp,
      });
    }
  };

  componentDidUpdate() {
    if (
      this.state.name !== "" &&
      this.state.level !== "" &&
      this.state.count === 0
    ) {
      this.timerVar = setInterval(this.timer, 1000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerVar);
  }

  render() {
    return (
      <div className="container">
        <div className="title">QuizOn</div>

        {this.state.name === "" ? (
          <InputUsername selectUserName={this.selectUserName} />
        ) : null}

        {this.state.name !== "" &&
        this.state.level !== "" &&
        this.state.count <= 10 ? (
          <div className="levelLable">
            <b>Name :</b>
            {this.state.name}
            &nbsp;&nbsp;&nbsp;
            <b>Level :</b>
            {this.state.level}
            <div className="timer">{this.state.count}</div>
            <hr />
          </div>
        ) : null}

        {this.state.name !== "" && this.state.level === "" ? (
          <LevelSelection selectedLevel={this.selectedLevel} />
        ) : null}

        {this.state.name !== "" &&
          this.state.level !== "" &&
          this.state.count <= 10 &&
          this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {(this.state.name !== "" && this.state.responses === 5) ||
        this.state.count > 10 ? (
          <Result
            score={this.state.score}
            playAgain={this.playAgain}
            name={this.state.name}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
