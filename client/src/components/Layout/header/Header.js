import React, { Component } from 'react';
import NavButtonLayer from './NavButtonLayer';
import Logo from './Logo';
import LoginSection from './LoginSection';

export class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="header-body">
          <div class="logo">
            <img src="img/logo-light.png" alt="logo"/>
          </div>
          <div class="header-menu">
            <ul class="menu-list">
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  Categories
                </a>
              </li>
              <li>
                <a href="#">
                  Recipes
                </a>
              </li>
            </ul>
          </div>
          <div class="login-section">
            <div class="login-button">
              <button>Login</button>
            </div>
            <div class="submit-recipe-button">
              <button>Submit Recipe</button>
            </div>
            <div class="header-burger">
              <span class="second"></span>
              <span class="third"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
