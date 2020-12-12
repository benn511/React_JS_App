import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, updateClick }) => {
  /*[theStateValue, stateModifier] = useState(values or value); */
  const [answer, setAnswer] = useState(options);
  const [isDisabled, setDisabled] = useState(false);

  const disableButton = () => {
    setDisabled(true);
  };

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
          disabled
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
