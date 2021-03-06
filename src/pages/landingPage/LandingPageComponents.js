import React from "react";
import { remove, add } from "./ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

export const DecrementButton = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(remove())} className={className}>
      Decrement
    </button>
  );
};

export const IncrementButton = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(add("hello"))} className={className}>
      Increment
    </button>
  );
};

export const Label = ({ className }) => {
  const count = useSelector((state) => state.ShoppingCartList);
  return <label className={className}>{count}</label>;
};
