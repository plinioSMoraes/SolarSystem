import PropTypes from 'prop-types'; // Importar pra usar props
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alt = `Planeta ${planetName}`;
    return (
      <div className="planetCard" data-testid="planet-card">
        <h1 data-testid="planet-name">{planetName}</h1>
        <img src={ planetImage } alt={ alt } />
      </div>);
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
