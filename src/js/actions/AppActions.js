import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  toggleFollow() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.FOLLOW_TOGGLED
    });
  },

  loadImages() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.IMAGES_LOADED
    });
  }
};
