import {GET_POSTS} from './types.js';

const initialState = {
  renderedPosts: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, renderedPosts: action.payload }
    default: return state
  }
};
