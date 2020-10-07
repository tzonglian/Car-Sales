import React from "react";
import { connect } from "react-redux";
import { removeFeature, REMOVE_FEATURE } from "../actions/featureActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// connect first takes 2 arg's:
// NOTE TO SELF, CHANGE ADDFEATURE -> REMOVE-FEATURE
export default connect(null, { removeFeature })(AddedFeature);
