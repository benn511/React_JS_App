import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import QuestionBoxAnswers from "./components/QuestionBoxAnswers";
import Result from "./components/Result";

class QuizBee extends Component {
  //State variable should never be written to directly by us..Only by API
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  //Invoke api to get our questions(Update State var)
  getQuestions = () => {
    quizService().then((questions) => {
      this.setState({ questionBank: questions });
    });
  };

  // Controls state of score, and responses
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  // Controls state of questionBank, score and responses on a reset
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Javascript/React Quiz</div>
        {/* Renders questions when available..
        there has to be at least one question to render and less than 5 responses to our questions */}
        {this.state.questionBank.length > 0 &&
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

        {/* Different render state for Result*/}
        {this.state.responses === 5 ? (
          <Result
            questions={this.state.questionBank}
            score={this.state.score}
            playAgain={this.playAgain}
          />
        ) : null}

        {/* Render correct answer choices after reaching max */}
        {this.state.questionBank.length > 0 &&
          this.state.responses === 5 &&
          this.state.questionBank.map(
            ({ question, correct, questionId, tips }) => (
              <QuestionBoxAnswers
                question={question}
                correct={correct}
                key={questionId}
                tip={tips}
              />
            )
          )}

        {/* End of container */}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
