import React, { Component, PropTypes } from 'react';

class Questions extends Component {
  render() {
    return (
      <div>
        <h3>How do you manage your books?</h3>
        <form>
          <div className="radio">
            <label>
              <input type="radio" name="answer" />
              Online accounting software
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="answer" />
              Desktop accounting software
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="answer" />
              Spreadsheets (love them formulas!)
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="answer"/>
              Books? You mean like Harry Potter?
            </label>
          </div>
          <button className="btn btn-primary btn-lg">Next</button>
        </form>
      </div>
    );
  }
}

Questions.propTypes = {};

export default Questions;
