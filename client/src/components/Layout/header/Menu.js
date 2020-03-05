import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <div className="header-menu">
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Category</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
