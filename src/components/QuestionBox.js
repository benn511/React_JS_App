import React, { Component } from "react";

export default class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: this.props.options };
  }

  render() {
    return (
      <div className="questionBox">
        {/* Question */}
        <div className="question">{this.props.question}</div>

        {/* Options */}
        {this.state.answers.map((text, index) => (
          <button
            key={index}
            className="answerBtn orange"
            onClick={() => {
              this.setState({ answers: [text] });
              this.props.selected(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    );
  }
}
