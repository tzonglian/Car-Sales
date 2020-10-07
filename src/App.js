import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",
  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: [],
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: "V-6 engine", price: 1500 },
  //     { id: 2, name: "Racing detail package", price: 1500 },
  //     { id: 3, name: "Premium sound system", price: 500 },
  //     { id: 4, name: "Rear spoiler", price: 250 },
  //   ],
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

// *** Passing Store's state to App's props (part 1)
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

// Connects App's props to Store's state (part 2)
export default connect(mapStateToProps)(App);
