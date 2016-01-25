import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import QuestonChoice from '../components/QuestionChoice';
import { getCurrentQuestion, isLastQuestion } from '../reducers/questions';
import { getQuestions } from '../actions/questions';
import { addAnswer } from '../actions/response';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { choice: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getQuestions());
  }

  handleChange(e) {
    this.setState({ choice: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = this.props.question.toJS();
    const points = question.choices.find((choice) => choice._id === this.state.choice).points;
    this.props.dispatch(addAnswer(question._id, this.state.choice, points));
    const nextQuestion = Number(this.props.params.id) + 1
    if (!this.props.isLastQuestion) {
      this.props.history.pushState(null, '/questions/' + nextQuestion);
    } else {
      this.props.history.pushState(null, '/results');
    }
  }

  render() {
    const question = this.props.question.toJS();
    if (!Object.keys(question).length) return null;
    const btnText = this.props.isLastQuestion ? 'Finish' : 'Next';
    return (
      <div>
        <h3>{question.text}</h3>
        <form onSubmit={this.handleSubmit}>
          {question.choices.map((choice, i) => {
            return <QuestonChoice key={i} choice={choice} onChange={this.handleChange} checked={choice._id === this.state.choice} />
          })}
          <button className="btn btn-primary btn-lg">{btnText}</button>
        </form>
      </div>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  question: PropTypes.instanceOf(Immutable.Map).isRequired,
  answers: PropTypes.instanceOf(Immutable.Map).isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  const loading = state.questions.get('loading');
  const currentQuestionIndex = props.params.id - 1;
  return {
    loading,
    question: getCurrentQuestion(state.questions, currentQuestionIndex),
    isLastQuestion: isLastQuestion(state.questions, currentQuestionIndex),
  };
}

export default connect(mapStateToProps)(Question);
