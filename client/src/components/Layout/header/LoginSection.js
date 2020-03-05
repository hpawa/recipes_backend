import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LoginSection extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    console.log(this.ref)
    this.ref.current.className += ' active';
  }


  render() {
    return (
      <div className="login-section">
        <div className="login-button">
          <button><i className="flaticon-profile"></i> Login</button>
        </div>
        <div className="submit-recipe-button">
          <button><i className="flaticon-plus-1"></i> <span>Submit Recipe</span></button>
        </div>
        <div className="header-burger">
          <span className="second"></span>
          <span className="third"></span>
        </div>
      </div>
    )
  }
}

export default LoginSection
