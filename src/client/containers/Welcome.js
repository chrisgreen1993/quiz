import React, { Component, PropTypes } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Welcome to the Cash Flow Quiz</h1>
        </div>
        <form>
          <div className="input-group">
            <input type="text" className="form-control input-lg" placeholder="What is your name?" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary btn-lg">Next</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

Welcome.propTypes = {};

export default Welcome;
