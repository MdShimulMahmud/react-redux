const redux = require("redux");

// console.log(redux);

const initState = {
  num: 0,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "INC_NUM") {
    return {
      ...state,
      num: state.num + 1,
    };
  } else if (action.type === "SUB_NUM") {
    return {
      ...state,
      num: state.num - action.value,
    };
  }
  return state;
};

const store = redux.createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INC_NUM",
});

store.dispatch({
  type: "SUB_NUM",
  value: 5,
});
