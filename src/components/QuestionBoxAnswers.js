import React, { Component } from "react";

// const QuestionBoxAnswers = ({ question, correct, questionId, tip }) => {
export default class QuestionBoxAnswers extends Component {
  render() {
    return (
      <div className="questionBox">
        {/* Question */}
        <div className="question">{this.props.question}</div>
        {/* Correct answer */}
        <button key={this.props.questionId} className="answerBtn green">
          {this.props.correct}
        </button>
        <div className="question">{this.props.tip}</div>
      </div>
    );
  }
}
