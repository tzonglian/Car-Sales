import React, { useEffect, useReducer } from "react";
import AdditionalFeature from "./AdditionalFeature";
import { initialState, featureReducer } from "../reducers/featureReducer";

const AdditionalFeatures = () => {
  const [state, dispatch] = useReducer(featureReducer, initialState);

  useEffect(() => {
    console.log(state);
  });

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.additionalFeatures.length ? (
        <ol type="1">
          {state.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              dispatch={dispatch}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
