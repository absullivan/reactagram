import React from 'react';
import Avatar from './Avatar.jsx';
import FollowButton from './FollowButton.jsx';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';

function componentState() {
  return {
    isFollowing: AppStore.isFollowing(),
    userProfile: AppStore.getUserProfile()
  };
}

export default React.createClass({
  _onChange() {
    this.setState(componentState());
  },

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return componentState();
  },

  toggleFollow: function() {
    AppActions.toggleFollow();
  },

  render: function() {
    let {isFollowing} = this.state;
    let {avatar, username, firstname, lastname, description} = this.state.userProfile;
    return (
      <div className="biography">
        <div className="biography__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="biography__details">
          <h2 className="biography__details__username">{username}</h2>
          <FollowButton following={isFollowing} onClick={this.toggleFollow} />
          <p className="biography__details__description">React / Flux application using the Instagram API</p>
          <p className="biography__details__description">
            <strong>{firstname} {lastname}</strong> - {description} - <a href="https://www.endaquigley.com" target="_blank">www.endaquigley.com</a>
          </p>
        </div>
      </div>
    );
  }
});
