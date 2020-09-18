
// ACTION TO REQUEST DATA FROM API
const loadCommits = () => {
  return {
    type: 'LOAD_COMMITS'
  };
};

// ACTION EXECUTED AFTER SUCCESSFULL RESPONSE
const loadCommitsSuccess = response => {
  return {
    type: 'LOAD_COMMITS_SUCCESS',
    payload: response
  };
};

// ACTION EXECUTED AFTER A BAD REQUEST
const loadCommitsFailure = response => {
  return {
    type: 'LOAD_COMMITS_FAILURE',
    payload: response
  };
};

export {loadCommits,
  loadCommitsSuccess,
  loadCommitsFailure};
