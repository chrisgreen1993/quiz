import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container" style={{ maxWidth: '800px', marginTop: '20px' }}>
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  return {
    answers: state.answers,
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(App);
