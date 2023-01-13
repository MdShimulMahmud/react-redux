import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { buyCake } from "../../redux";
const HooksCakeContainer = () => {
  const noOfCakes = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes - {noOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
