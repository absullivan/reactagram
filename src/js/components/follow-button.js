import React from 'react';
import Button from './button';

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    following: React.PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <Button text={this.props.following ? 'Unfollow' : 'Follow'} onClick={this.props.onClick} />
    )
  }
});
