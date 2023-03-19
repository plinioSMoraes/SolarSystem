import React from 'react';

// const pText = 'Sistema Solar';
// const hText = <h1>{pText}</h1>;
// const headerText = <header>{hText}</header>;

const solarHeader = <header className="solarHeader"><h1>Sistema Solar</h1></header>;
class Header extends React.Component {
  render() {
    return (solarHeader);
  }
}

export default Header;
