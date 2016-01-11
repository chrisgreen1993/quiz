import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Cash Flow Quiz</Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
