import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Results extends Component {
  render() {
    return (
      <div>
        <h3>Thank you {this.props.answers.get('name')} </h3>
        <p>You scored {this.props.answers.get('total')} out of a possible 150 in the cash flow quiz</p>
        <Link to="/high-scores" className="btn btn-primary btn-lg">High Scores</Link>
      </div>
    );
  }
}

Results.propTypes = {};

export default Results;
