import React from 'react';
import classNames from 'classnames';

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['normal', 'round'])
  },
  getDefaultProps: function() {
    return {
      type: 'normal'
    }
  },
  render: function() {
    const classes = classNames('standard-button',
      { 'standard-button--round' : this.props.type === 'round' }
    );
    return (
      <input type="button" className={classes} value={this.props.text} onClick={this.props.onClick} />
    );
  }
});
