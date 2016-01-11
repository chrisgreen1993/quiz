import React, { Component, PropTypes } from 'react';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container" style={{ maxWidth: '800px', marginTop: '20px' }}>
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
