import React from "react";
import ShopCart from "../img/ShopCart.svg";
import { add } from "./../ShoppingCart";
import { useDispatch } from "react-redux";

export const shopCart = ({ className }) => {
  return <img src={ShopCart} alt="Shopping Cart" className={className}></img>;
};

export const AddToCart = ({ className, product }) => {
  const dispatch = useDispatch();
  return (
    <button className={className} onClick={() => dispatch(add(product))}>
      Add to Cart
    </button>
  );
};

export const searchBarInput = ({
  className,
  setSearchBarValue,
  inputRef,
  value,
}) => {
  return (
    <input
      ref={inputRef}
      value={value}
      className={className}
      onChange={(e) => setSearchBarValue(e.target.value)}
      type="text"
      placeholder={"Search..."}
    ></input>
  );
};
