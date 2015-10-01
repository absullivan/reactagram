import React from 'react';
import Avatar from './avatar';
import FollowButton from './follow-button';

export default React.createClass({
  propTypes: {
    profile: React.PropTypes.object.isRequired,
    following: React.PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <div className="mini-bio">
        <div className="mini-bio__avatar">
          <Avatar size="small" src={this.props.profile.avatar} />
        </div>
        <div className="mini-bio__username">
          <h2 className="mini-bio__username__header">{this.props.profile.username}</h2>
        </div>
        <div className="mini-bio__action">
          <FollowButton following={this.props.following} onClick={this.props.toggleFollow} />
        </div>
      </div>
    );
  }
});
