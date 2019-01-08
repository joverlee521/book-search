import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link to="/" className="navbar-brand">
        Google Books
      </Link>
      <ul className="nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="text-white nav-link">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="text-white nav-link">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
