import { ADD_FEATURE } from ".././actions/featureActions";
import { REMOVE_FEATURE } from ".././actions/featureActions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const featureReducer = (state = initialState, action) => {
  console.log(action);
  console.log("state from featureReducer: ", state);
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        // Add to additional price
        additionalPrice: state.additionalPrice + action.payload.price,
        // Update car with feature
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        // Remove from list of optional features
        additionalFeatures: state.additionalFeatures.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        // Sub from additional price
        additionalPrice: state.additionalPrice - action.payload.price,
        // Update car without feature
        car: {
          ...state.car,
          features: state.car.features.filter(
            (item) => item.id !== action.payload.id
          ),
        },
        // Readd to list of optional features
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };

    default:
      return state;
  }
};
