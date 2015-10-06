import React from 'react';
import Gallery from './Gallery.jsx';
import Biography from './Biography.jsx';

export default React.createClass({
  render: function() {
    return (
      <div className="application">
        <Biography />
        <Gallery />
        <p className="footer">Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a>, fork this project on <a href="https://github.com/endaquigley/reactagram" target="_blank">GitHub</a></p>
      </div>
    );
  }
});
