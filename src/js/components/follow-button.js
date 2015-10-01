import React from 'react';
import Button from './button';

export default React.createClass({
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
