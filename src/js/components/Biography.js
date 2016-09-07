import React, { Component } from 'react';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

class Biography extends Component {

  toggleFollow() {
    this.props.store.dispatch({
      type: 'TOGGLE_FOLLOW'
    });
  }

  render() {

    const state = this.props.store.getState();

    const { isFollowing } = state.user;
    const { avatar, username, firstname, lastname, description } = state.user.profile;

    return (
      <div className="biography">
        <div className="biography__avatar">
          <Avatar src={ avatar } />
        </div>
        <div className="biography__details">
          <h2 className="biography__details__username">{ username }</h2>
          <FollowButton following={ isFollowing } onClick={ this.toggleFollow.bind(this) } />
          <p className="biography__details__description">React / Redux application using the Instagram API</p>
          <p className="biography__details__description">
            <strong>{ firstname } { lastname }</strong> - { description } - <a href="https://www.endaquigley.com" target="_blank">www.endaquigley.com</a>
          </p>
        </div>
      </div>
    );
  }

}

export default Biography;
