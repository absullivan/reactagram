import React, { Component, PropTypes } from 'react';
import Button from './Button';

class FollowButton extends Component {

  render() {
    return (
      <Button text={ this.props.following ? 'Unfollow' : 'Follow' } onClick={ this.props.onClick } />
    )
  }

}

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  following: PropTypes.bool.isRequired
}

export default FollowButton;
