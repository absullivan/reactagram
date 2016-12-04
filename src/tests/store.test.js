import store from '../store';
import deepFreeze from 'deep-freeze';

it('should toggle isFollowing boolean', () => {

  const stateBefore = store.getState();
  deepFreeze(stateBefore);

  store.dispatch({
    type: 'TOGGLE_FOLLOW'
  });

  const stateEnd = store.getState();
  deepFreeze(stateEnd);

  expect(stateBefore.user.isFollowing).not.toBe(stateEnd.user.isFollowing);

});

it('should load 9 new images', () => {

  const stateBefore = store.getState();
  deepFreeze(stateBefore);

  store.dispatch({
    type: 'LOAD_MORE'
  });

  const stateAfter = store.getState();
  deepFreeze(stateAfter);

  expect(stateAfter.gallery.images.length).toBe(stateBefore.gallery.images.length + 9);

});
