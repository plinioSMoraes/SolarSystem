import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas"> </Title>
        <div className="planets">
          {planets.map(({ name, image }, index) => (
            <PlanetCard key={ index } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>);
  }
}

export default SolarSystem;
