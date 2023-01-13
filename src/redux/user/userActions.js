const { default: axios } = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleWare = require("redux-thunk").default;
const initState = {
  laoding: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        laoding: false,
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        laoding: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
