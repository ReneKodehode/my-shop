import React from "react";
import Products from "../ProductLists";

export const productShowCase = ({ className, productName }) => {
  const selectedProduct = Products.find((obj) => obj.name === productName);

  return (
    <div className={className}>
      <span
        onClick={() =>
          (window.location.href =
            "/product" + selectedProduct.category + selectedProduct.id)
        }
      >
        <img className={className} src={selectedProduct.image[0]}></img>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
      </span>
      <button
        onClick={() => console.log(selectedProduct.name + " TODO: add to cart")}
      >
        Add to Cart
      </button>
    </div>
  );
};
