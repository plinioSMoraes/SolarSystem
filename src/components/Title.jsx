import React from 'react';
import PropTypes from 'prop-types'; // Importar pra usar props

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (<h2>{headline}</h2>); // parentes no return SEMPRE
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
