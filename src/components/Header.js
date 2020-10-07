import React, { useReducer } from "react";
import { initialState, featureReducer } from "../reducers/featureReducer";

const Header = () => {
  const [state, dispatch] = useReducer(featureReducer, initialState);

  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

export default Header;
