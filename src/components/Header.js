import React, { useReducer } from "react";
import { initialState, featureReducer } from "../reducers/featureReducer";
import { connect } from "react-redux";

const Header = (props) => {
  //const [state, dispatch] = useReducer(featureReducer, initialState);

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};
export default connect(mapStatetoProps)(Header);
