import React from "react";
import ShopCart from "../img/ShopCart.svg";

export const shopCart = ({ className }) => {
  return <img src={ShopCart} alt="Shopping Cart" className={className}></img>;
};

export const searchBar = ({ className }) => {
  return (
    <input className={className} type="text" placeholder="Search..."></input>
  );
};
