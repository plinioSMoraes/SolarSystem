import React from 'react';

const pText = 'Sistema Solar';
const hText = <h1>{pText}</h1>;
const headerText = <header>{hText}</header>;

class Header extends React.Component {
  render() {
    return (headerText);
  }
}

export default Header;
