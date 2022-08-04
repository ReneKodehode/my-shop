import React from "react";
import Products from "../ProductLists";
import { AddToCartStyled, NoStyledLink } from "./StyledComponentsGlobal";

export const productShowCase = ({ className, productName }) => {
  const selectedProduct = Products.find((obj) => obj.name === productName);

  return (
    <div className={className}>
      <NoStyledLink
        to={"../product" + selectedProduct.category + selectedProduct.id}
      >
        <img className={className} src={selectedProduct.image[0]}></img>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
      </NoStyledLink>
      <AddToCartStyled product={selectedProduct}></AddToCartStyled>
    </div>
  );
};
