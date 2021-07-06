import React,{useState} from "react";
import "../style.css";


const QuestionBox = ({ question, options,selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text,index) => (
          <button
              key={index}
              className="answerBtn"
              onClick={()=>{
                    setAnswer([text]);
                    selected(text);
                  }}> {text}
        </button>
        ))}
    </div>
  )
};


//31:40/38:24

export default QuestionBox;
