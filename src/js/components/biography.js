import React from 'react';
import Avatar from './avatar';
import FollowButton from './follow-button';

module.exports = React.createClass({
  propTypes: {
    profile: React.PropTypes.object.isRequired,
    following: React.PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <div className="biography">
        <div className="biography__avatar">
          <Avatar src={this.props.profile.avatar} />
        </div>
        <div className="biography__details">
          <h2 className="biography__details__username">{this.props.profile.username}</h2>
          <FollowButton following={this.props.following} onClick={this.props.toggleFollow} />
          <p className="biography__details__description">
            <strong>{this.props.profile.firstname} {this.props.profile.lastname}</strong> - {this.props.profile.description} - <a href="https://www.endaquigley.com" target="_blank">www.endaquigley.com</a>
          </p>
        </div>
      </div>
    );
  }
});
