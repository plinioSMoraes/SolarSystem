import PropTypes from 'prop-types'; // Importar pra usar props
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="Title">
        <h2>{headline}</h2>
      </div>); // parentes no return SEMPRE
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
