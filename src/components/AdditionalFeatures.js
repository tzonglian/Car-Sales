import React, { useEffect, useReducer } from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = (props) => {
  // const [state, dispatch] = useReducer(featureReducer, initialState);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              // dispatch={dispatch}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// Connects AdditionalFeature's props to Store's state
const mapStatetoProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
}
export default connect(mapStatetoProps)(AdditionalFeatures);
