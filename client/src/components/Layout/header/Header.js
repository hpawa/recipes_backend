import React, { Component } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import LoginSection from './LoginSection';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div class="header-container">
          <div className="header-body">
            <Logo/>
            <Menu/>
            <LoginSection/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
