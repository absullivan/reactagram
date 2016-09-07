import { createStore } from 'redux';
import { combineReducers } from 'redux';

const userDefaults = {
  profile: {
    firstname: 'Enda',
    lastname: 'Quigley',
    username: 'endaquigley',
    avatar: 'images/avatar.jpg',
    description: 'Full Stack Developer, Dublin'
  },
  isFollowing: false
}

const user = (state = userDefaults, action) => {

  switch (action.type) {

    case 'TOGGLE_FOLLOW':

      state.isFollowing = !state.isFollowing;
      return state;

    default: return state;

  }

}

const galleryDefaults = {
  images: [
    { id: 0, url: 'images/avatar.jpg' },
    { id: 1, url: 'images/avatar.jpg' },
    { id: 2, url: 'images/avatar.jpg' },
    { id: 3, url: 'images/avatar.jpg' },
    { id: 4, url: 'images/avatar.jpg' },
    { id: 5, url: 'images/avatar.jpg' },
    { id: 6, url: 'images/avatar.jpg' },
    { id: 7, url: 'images/avatar.jpg' },
    { id: 8, url: 'images/avatar.jpg' }
  ]
}

const gallery = (state = galleryDefaults, action) => {

  switch (action.type) {

    case 'LOAD_MORE':

      for (let i = 0; i < 9; i++) {
        state.images = [...state.images, {
          id: state.images.length,
          url: 'images/avatar.jpg'
        }];
      }

      return state;

    default: return state;

  }

}

const reducer = combineReducers({ user, gallery });
const store = createStore(reducer);

export default store;
