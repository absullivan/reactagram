import store from '../store';
import deepFreeze from 'deep-freeze';

describe('user actions', () => {

  it('should toggle "isFollowing" boolean', () => {

    const stateOne = store.getState();
    deepFreeze(stateOne);

    store.dispatch({
      type: 'TOGGLE_FOLLOW'
    });

    const stateTwo = store.getState();
    deepFreeze(stateTwo);

    store.dispatch({
      type: 'TOGGLE_FOLLOW'
    });

    const stateThree = store.getState();
    deepFreeze(stateThree);

    expect(stateOne.user.isFollowing).not.toBe(stateTwo.user.isFollowing);
    expect(stateTwo.user.isFollowing).not.toBe(stateThree.user.isFollowing);

  });

});

describe('gallery actions', () => {

  it('should set "isLoading" to true when pending', () => {

    const stateBefore = store.getState();
    deepFreeze(stateBefore);

    store.dispatch({
      type: 'LOAD_MORE_PENDING'
    });

    const stateAfter = store.getState();
    deepFreeze(stateAfter);

    expect(stateAfter.gallery.isLoading).toBe(true);

  });

  it('should set "isLoading" to false when fulfilled', () => {

    const stateBefore = store.getState();
    deepFreeze(stateBefore);

    store.dispatch({
      type: 'LOAD_MORE_FULFILLED'
    });

    const stateAfter = store.getState();
    deepFreeze(stateAfter);

    expect(stateAfter.gallery.isLoading).toBe(false);

  });


    it('should add 9 new objects to the images array once fulfilled', () => {
      
      const stateBefore = store.getState();
      deepFreeze(stateBefore);

      store.dispatch({
        type: 'LOAD_MORE_FULFILLED'
      });

      const stateAfter = store.getState();
      deepFreeze(stateAfter);

      expect(stateAfter.gallery.images.length).toBe(stateBefore.gallery.images.length + 9);

    });

});
