var React = require('react');
var reqwest = require('reqwest');
var classNames = require('classnames');


var userProfile = {
  id: 1,
  firstname: 'Enda',
  lastname: 'Quigley',
  username: 'endaquigley',
  avatar: 'images/avatar.jpg',
  description: 'Full Stack Developer, Dublin'
};

var instagramUrl = 'https://api.instagram.com/v1/tags/dogs/media/recent';
instagramUrl = replaceUrlParam(instagramUrl, 'client_id', '2617d61fbb324a40803930764e8dfb69');

function replaceUrlParam(url, paramName, paramValue) {
  var pattern = new RegExp('('+paramName+'=).*?(&|$)');
  var newUrl = url;
  if (url.search(pattern)>=0) {
    newUrl = url.replace(pattern,'$1' + paramValue + '$2');
  } else {
    newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
  }
  return newUrl;
};


var App = React.createClass({
  getInitialState: function() {
    return {
      userProfile: userProfile,
      following: JSON.parse(localStorage.getItem('following')) || false,
    }
  },
  toggleFollow: function() {
    var updatedState = !this.state.following;
    this.setState({ following: updatedState });
    localStorage.setItem('following', updatedState);
  },
  render: function() {
    return (
      <div className="application">
        <Biography profile={this.state.userProfile} following={this.state.following} toggleFollow={this.toggleFollow} />
        <Gallery />
        <ModalDialog id="image-viewer">
          <MiniBiography profile={this.state.userProfile} following={this.state.following} toggleFollow={this.toggleFollow} />
          <SquareImage src="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11910210_513140118855138_977323818_n.jpg" />
        </ModalDialog>
        <p className="footer">Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a></p>
      </div>
    );
  }
});


var Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['normal', 'round'])
  },
  getDefaultProps: function() {
    return {
      type: 'normal'
    }
  },
  render: function() {
    var classes = classNames('standard-button',
      { 'standard-button--round' : this.props.type === 'round' }
    );
    return (
      <input type="button" className={classes} value={this.props.text} onClick={this.props.onClick} />
    );
  }
});


var FollowButton = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    following: React.PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <Button text={this.props.following ? 'Unfollow' : 'Follow'} onClick={this.props.onClick} />
    )
  }
});


var Avatar = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['small', 'medium', 'large'])
  },
  getDefaultProps: function() {
    return {
      size: 'medium'
    };
  },
  render: function() {
    var classes = classNames('avatar',
      {'avatar--small': this.props.size === 'small'},
      {'avatar--large': this.props.size === 'large'}
    );
    return (
      <img className={classes} src={this.props.src} />
    );
  }
});


var Biography = React.createClass({
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


var MiniBiography = React.createClass({
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


var SquareImage = React.createClass({
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


var Gallery = React.createClass({
  getInitialState: function() {
    return {
      media: [],
      pagination: {},
      loading: false
    }
  },
  componentDidMount: function() {
    this.fetchData(instagramUrl);
  },
  fetchData: function(url) {
    this.setState({ loading: true });
    var currentMedia = this.state.media;

    // convert URL to JSONP format...
    url = replaceUrlParam(url, 'count', '9');
    url = replaceUrlParam(url, 'callback', '?');

    var component = this;
    reqwest({
      url: url,
      type: 'jsonp',
      success: function(response) {
        response.data.forEach(function(item) {
          currentMedia.push(item);
        });
        component.setState({
          loading: false,
          media: currentMedia,
          pagination: response.pagination
        });
      }
    });
  },
  loadMore: function() {
    var nextUrl = this.state.pagination.next_url;
    if (nextUrl) {
      this.fetchData(nextUrl);
    }
  },
  render: function() {
    if (this.state.media.length > 0) {
      var mediaElements = this.state.media.map(function(item) {
        return (
          <div key={item.id} className="gallery__item">
            <a href={item.images.standard_resolution.url} target="_blank">
              <SquareImage src={item.images.standard_resolution.url} />
            </a>
          </div>
        );
      });

      var loadMoreElement = null;
      if (this.state.loading === true) {
        loadMoreElement = (
          <Button type="round" text="Loading..." disabled="disabled" />
        );
      } else if (this.state.pagination.next_url) {
        loadMoreElement = (
          <Button type="round" text="Load More" onClick={this.loadMore} />
        );
      };

      return (
        <div className="gallery">
          <div className="gallery__items">
            {mediaElements}
          </div>
          {loadMoreElement}
        </div>
      );
    } else {
      return null;
    }
  }
});


var ModalDialog = React.createClass({
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


React.render(<App />, document.body);

module.exports = 'App';
