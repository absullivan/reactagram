import React from 'react';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div id={this.props.id} className="modal">
        <div className="modal__background"></div>
        <div className="modal__content">
          {this.props.children}
        </div>
      </div>
    );
  }
});
