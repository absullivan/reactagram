import React from 'react';
import classNames from 'classnames';

export default React.createClass({
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
    var classes = classNames('standard-button',
      { 'standard-button--round' : this.props.type === 'round' }
    );
    return (
      <input type="button" className={classes} value={this.props.text} onClick={this.props.onClick} />
    );
  }
});
