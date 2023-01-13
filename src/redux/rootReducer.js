const redux = require("redux");
const { default: cakeReducer } = require("./cake/cakeReducer");
const { userReducer } = require("./user/userReducer");
const combinedReducer = redux.combineReducers;

const rootReducer = combinedReducer({ cake: cakeReducer, user: userReducer });

export default rootReducer;
