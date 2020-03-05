import React, { Component } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import LoginSection from './LoginSection';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-body">
          <Logo/>
          <Menu/>
          <LoginSection/>
        </div>
      </div>
    )
  }
}

export default Header
