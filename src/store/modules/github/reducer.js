// import * as githubActions from './actions'

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: []
};

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_COMMITS':
      return {
        ...state,
        loading: true,
        error: false
      };

    case 'LOAD_COMMITS_SUCCESS':
    return {
      ...state,
      data: action.payload
    };

    case 'LOAD_COMMITS_FAILURE':
        return {
          ...state,
          loading: false,
          error: true
        };

    default:
      return state;
  }
}

export {reducer};
