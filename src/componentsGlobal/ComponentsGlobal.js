import React from "react";
import ShopCart from "../img/ShopCart.svg";
import { add } from "./../ShoppingCart";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { UseShoppingCartCounter } from "./StyledComponentsGlobal";

export const useShoppingCartCounter = ({ className }) => {
  let count = useSelector(
    (state) => state.ShoppingCart.ShoppingCartList,
    shallowEqual
  );

  return <p className={className}>{count.length}</p>;
};

export const shopCart = ({ className }) => {
  return (
    <>
      <img src={ShopCart} alt="Shopping Cart" className={className}></img>
      <UseShoppingCartCounter></UseShoppingCartCounter>
    </>
  );
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
