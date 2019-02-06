import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/NavMenu.scss';

export default props => (
  <div className="row">
    <nav className="navbar navber-expand-lg navbar-light">
      <div id="navbar">
        <ul className="navbar-nav">
          <li>
            <NavLink to="/" activeClassName="link-active">
              Dashboard
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
