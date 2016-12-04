import { createStore } from 'redux';
import { combineReducers } from 'redux';

const userDefaults = {
  profile: {
    firstname: 'Enda',
    lastname: 'Quigley',
    username: 'endaquigley',
    avatar: 'images/avatar.jpg',
    description: 'Frontend / UI Developer, Dublin'
  },
  isFollowing: (window.localStorage ? (localStorage.getItem('following') || false) : false)
}

const user = (state = userDefaults, action) => {

  switch (action.type) {

    case 'TOGGLE_FOLLOW':

      const toggleFollow = JSON.parse(!state.isFollowing);

      if (window.localStorage) {
        localStorage.setItem('following', toggleFollow);
      }

      return Object.assign({}, state, {
        isFollowing: toggleFollow
      });

    default: return state;

  }

}

const galleryDefaults = {
  images: [
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' },
    { url: 'images/avatar.jpg' }
  ]
}

const gallery = (state = galleryDefaults, action) => {

  switch (action.type) {

    case 'LOAD_MORE':

      return Object.assign({}, state, {
        images: [
          ...state.images,
          ...galleryDefaults.images
        ]
      });

    default: return state;

  }

}

const reducer = combineReducers({ user, gallery });
const store = createStore(reducer);

export default store;
