const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const initState = {
  laoding: false,
  userData: [],
  error: "",
};

export const userReducer = (state = initState, action) => {
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
        userData: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        laoding: false,
        userData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
