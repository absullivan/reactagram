import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const userDefaults = {
  profile: {
    firstname: 'Andrew',
    lastname: 'Sullivan',
    username: 'ab.sullivan',
    avatar: 'images/avatar.jpg',
    description: 'Vermont'
  },
  isFollowing: (window.localStorage ? (JSON.parse(localStorage.getItem('following')) || false) : false)
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
  ],
  isLoading: false
}

const gallery = (state = galleryDefaults, action) => {

  switch (action.type) {

    case 'LOAD_MORE_PENDING':

      return Object.assign({}, state, {
        isLoading: true
      });

    case 'LOAD_MORE_FULFILLED':

      return Object.assign({}, state, {
        images: [
          ...state.images,
          ...galleryDefaults.images
        ],
        isLoading: false
      });

    default: return state;

  }

}

const reducers = combineReducers({ user, gallery });
const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  middleware
);

export default store;
