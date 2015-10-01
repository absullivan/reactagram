'use strict';

import React from 'react';
import Gallery from './components/gallery';
import Biography from './components/biography';

const App = React.createClass({
  getInitialState: function() {
    return {
      userProfile: {
        firstname: 'Enda',
        lastname: 'Quigley',
        username: 'endaquigley',
        avatar: 'images/avatar.jpg',
        description: 'Full Stack Developer, Dublin'
      },
      following: JSON.parse(localStorage.getItem('following')) || false,
    }
  },
  toggleFollow: function() {
    const updatedState = !this.state.following;
    this.setState({ following: updatedState });
    localStorage.setItem('following', updatedState);
  },
  render: function() {
    return (
      <div className="application">
        <Biography profile={this.state.userProfile} following={this.state.following} toggleFollow={this.toggleFollow} />
        <Gallery />
        <p className="footer">Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a></p>
      </div>
    );
  }
});

React.render(<App />, document.body);
