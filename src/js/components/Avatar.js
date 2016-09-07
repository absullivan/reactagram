import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Avatar extends Component {

  render() {
    const classes = classNames('avatar',
      { 'avatar--small': this.props.size === 'small' },
      { 'avatar--large': this.props.size === 'large' }
    );
    return (
      <img className={ classes } src={ this.props.src } />
    );
  }

}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Avatar.defaultProps = {
  size: 'medium'
};

export default Avatar;
