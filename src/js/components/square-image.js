import React from 'react';

module.exports = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="square-image">
        <img className="square-image__image" src={this.props.src} />
      </div>
    );
  }
});