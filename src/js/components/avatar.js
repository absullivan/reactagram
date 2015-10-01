import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['small', 'medium', 'large'])
  },
  getDefaultProps: function() {
    return {
      size: 'medium'
    };
  },
  render: function() {
    const classes = classNames('avatar',
      {'avatar--small': this.props.size === 'small'},
      {'avatar--large': this.props.size === 'large'}
    );
    return (
      <img className={classes} src={this.props.src} />
    );
  }
});
