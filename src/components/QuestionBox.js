import React, { Component } from "react";

export default class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
  }

  handleAnswer() {
    this.setState({ answer: "" });
  }

  render() {
    let answers = this.props.options;

    return (
      <div className="questionBox">
        {/* Question */}
        <div className="question">{this.props.question}</div>

        {/* Options */}
        {answers.map((text, index) => (
          <button
            key={index}
            className="answerBtn orange"
            onClick={this.handleAnswer}
          >
            {text}
          </button>
        ))}
      </div>
    );
  }
}

// import React, { useState } from "react";

// const QuestionBox = ({ question, options, selected }) => {
//   const [answer, setAnswer] = useState(options);
//   return (
//     <div className="questionBox">
//       {/* Question */}
//       <div className="question">{question}</div>

//       {/* Answer Buttons */}
//       {answer.map((text, index) => (
//         <button
//           key={index}
//           className="answerBtn orange"
//           onClick={() => {
//             setAnswer([text]);
//             selected(text);
//           }}
//         >
//           {text}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default QuestionBox;
