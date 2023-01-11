const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;

function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "Redux Basic",
  };
}

function buyIceCream(params) {
  return {
    type: "BUY_ICECREAM",
    info: "Redux Basic",
  };
}

const initState = {
  noOfCakes: 20,
  noOfIceCream: 10,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes - 2,
      };
    case "BUY_ICECREAM":
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 2,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyIceCream());
