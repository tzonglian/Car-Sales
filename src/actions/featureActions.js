export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (featureToAdd) => {
  return { type: ADD_FEATURE, payload: featureToAdd };
};
