import reqwest from 'reqwest';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

const _instagramUrl = 'https://api.instagram.com/v1/tags/dogs/media/recent?client_id=2617d61fbb324a40803930764e8dfb69';

function _replaceUrlParam(url, paramName, paramValue) {
  const pattern = new RegExp('('+paramName+'=).*?(&|$)');
  let newUrl = url;
  if (url.search(pattern)>=0) {
    newUrl = url.replace(pattern,'$1' + paramValue + '$2');
  } else {
    newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
  }
  return newUrl;
};

let _instagramData = {
  media: [],
  pagination: {}
};

let _userProfile = {
  firstname: 'Enda',
  lastname: 'Quigley',
  username: 'endaquigley',
  avatar: 'images/avatar.jpg',
  description: 'Full Stack Developer, Dublin'
};

let _following = JSON.parse(localStorage.getItem('following')) || false;

function _fetchInstagramData() {
  let url = _instagramData.pagination.next_url || _instagramUrl;

  // convert URL to JSONP format...
  url = _replaceUrlParam(url, 'count', '9');
  url = _replaceUrlParam(url, 'callback', '?');

  reqwest({
    url: url,
    type: 'jsonp',
    success: function(response) {
      response.data.forEach(function(item) {
        _instagramData.media.push(item);
      });
      _instagramData.pagination = response.pagination;
      AppStore.emitChange();
    }
  });
}

function _toggleFollowButton() {
  _following = !_following;
  localStorage.setItem('following', _following);
  AppStore.emitChange();
}

// Facebook style store creation.
const AppStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getUserProfile() {
    return _userProfile;
  },

  isFollowing() {
    return _following;
  },

  getInstagramData() {
    return _instagramData;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(payload.action.type) {
      case Constants.ActionTypes.FOLLOW_TOGGLED:
        _toggleFollowButton();
        break;

      case Constants.ActionTypes.IMAGES_LOADED:
        _fetchInstagramData();
        break;
    }
  })
});

export default AppStore;
