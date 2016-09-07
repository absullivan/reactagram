import React, { Component, PropTypes } from 'react';

class SquareImage extends Component {

  render() {
    return (
      <div className="square-image">
        <img className="square-image__image" src={ this.props.src } />
      </div>
    );
  }

}

SquareImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default SquareImage;
