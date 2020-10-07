export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (featureToChange) => {
  return { type: ADD_FEATURE, payload: featureToChange };
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (featureToChange) => {
  return { type: REMOVE_FEATURE, payload: featureToChange };
};
