import React from "react";
import { useSelector, useStore } from "react-redux";

const Total = (props) => {
  const state = useSelector(state => state)
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

export default Total;
