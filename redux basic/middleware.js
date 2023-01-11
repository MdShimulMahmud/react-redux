const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;
const logger = reduxLogger.createLogger();

const applyMiddleWare = redux.applyMiddleware;

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

const initNoofCakes = {
  noOfCakes: 20,
};

const initNoofIceCream = {
  noOfIceCream: 20,
};

const cakeReducer = (state = initNoofCakes, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes - 2,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initNoofIceCream, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 2,
      };

    default:
      return state;
  }
};

const rootReducer = combinedReducer({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));

console.log("Initial: ", store.getState());

store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyIceCream());
