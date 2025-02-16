import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Color <span>S</span></h1>
      </Link>
    </header>
  );
}

export default Header; 