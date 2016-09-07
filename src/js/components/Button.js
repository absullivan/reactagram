import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Button extends Component {

  render() {
    const classes = classNames('standard-button',
      { 'standard-button--round' : this.props.type === 'round' }
    );
    return (
      <input type="button" className={ classes } value={ this.props.text } onClick={ this.props.onClick } />
    );
  }

}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  type: 'normal'
};

export default Button;
