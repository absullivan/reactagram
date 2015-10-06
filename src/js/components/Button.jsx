import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string.isRequired,
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
