import React from "react";
import { connect } from "react-redux";
import { addFeature, ADD_FEATURE } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// Don't need state, only need access to prop's actions

// Connect first takes 2 arg's.  First arg is null bc we don't need state.
// Second arg is the action(s).  Pass back up component to props.
export default connect(null, { addFeature })(AdditionalFeature);
