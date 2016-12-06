export const loadMorePending = () => {
  return {
    type: 'LOAD_MORE_PENDING'
  }
}

export const loadMoreFulfilled = () => {
  return {
    type: 'LOAD_MORE_FULFILLED'
  }
}

export const toggleFollow = () => {
  return {
    type: 'TOGGLE_FOLLOW'
  }
}

export const loadMore = () => {
  return (dispatch) => {
    dispatch(loadMorePending());
    setTimeout(() => {
      dispatch(loadMoreFulfilled());
    }, 500);
  }
}
