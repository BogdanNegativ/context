import React, { Component } from 'react';
import Profile from '../Profile';
import Menu from '../Menu';

class Header extends Component {
  render() {
    return (
      <header>
        <h2>THIS IS HEADER</h2>
        <Profile />
        <Menu />
      </header>
    );
  }
}

export default Header;
