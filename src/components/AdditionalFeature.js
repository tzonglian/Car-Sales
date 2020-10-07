import React, { useReducer } from "react";
import { initialState, featureReducer } from "../reducers/featureReducer";

const AdditionalFeature = ({ dispatch, feature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => dispatch({ type: "ADD_FEATURE", payload: feature })}
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
