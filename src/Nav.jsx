import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const navStyle = {
      color: 'black',
    };

    return (
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Amiibos</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
