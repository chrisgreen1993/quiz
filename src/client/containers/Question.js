import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import { getQuestions } from '../actions/questions';
import { saveAnswer } from '../actions/answers';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { questionChoiceId: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getQuestions());
  }

  handleChange(e) {
    console.log(e);
    this.setState({ questionChoiceId: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const index = this.props.answers.get('currentQuestionIndex');
    const question = this.props.questions.getIn(['questions', index]);
    const questionId = question.get('_id');
    const choice = question.get('choices').find(choice => choice.get('_id') === this.state.questionChoiceId);
    this.props.dispatch(saveAnswer(questionId, this.state.questionChoiceId, choice.get('points')));
    if (question === this.props.question.last()) {
      this.props.dispatch(saveAllAnswers())
    }
    this.setState({ questionChoiceId: '' });
  }

  render() {
    if (this.props.questions.get('questions').isEmpty()) return null;
    const index = this.props.answers.get('currentQuestionIndex');
    const question = this.props.questions.getIn(['questions', index]);
    return (
      <div>
        <h3>{question.get('text')}</h3>
        <form onSubmit={this.handleSubmit}>
          {question.get('choices').map((choice, i) => {
            console.log(choice);
            return (
              <div key={i} className="radio">
                <label>
                  <input type="radio" name="answer" onChange={this.handleChange} checked={choice.get('_id') === this.state.questionChoiceId} value={choice.get('_id')} required />
                  {choice.get('text')}
                </label>
              </div>
            );
          })}
          <button className="btn btn-primary btn-lg">Next</button>
        </form>
      </div>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.instanceOf(Immutable.Map).isRequired,
  answers: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Question;
