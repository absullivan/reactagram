import React, { Component } from 'react';
import Gallery from './Gallery';
import Biography from './Biography';

class Application extends Component {

  render() {
    return (
      <div className="application">
        <Biography store={ this.props.store } />
        <Gallery store={ this.props.store } />
        <p className="footer">
          Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a>,
          code available on <a href="https://github.com/endaquigley/reactagram" target="_blank">GitHub</a>
        </p>
      </div>
    );
  }

}

export default Application;
