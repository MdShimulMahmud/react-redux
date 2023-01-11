import { BUY_CAKE } from "./cakeTypes";
const initialState = {
  noOfCakes: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCakes: state.noOfCakes - 1 };

    default:
      return state;
  }
};
export default reducer;
