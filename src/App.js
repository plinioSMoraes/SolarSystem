import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header className="solarHeader" />
        <SolarSystem className="solarSystem" />
        <Missions />
      </main>
    );
  }
}
// Iniciando o projeto

export default App;
