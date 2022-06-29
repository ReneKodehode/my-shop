import {
  AddToShoppingCart,
  ProductBeforePrice,
  ProductContent,
  ProductDescription,
  ProductHeader,
  ProductIdAndNumber,
  ProductImageDiv,
  ProductMainDiv,
  ProductNowPrice,
  ProductPageContentDiv,
  ProductRatingDiv,
  ProductSecondaryDiv,
  ProductShopDiv,
  ProductTextDiv,
  ProductTitle,
} from "./productPage/ProductStyle";

// import Products from "../ProductLists";
import { useEffect, useState } from "react";
import { empty } from "./landingPage/ShoppingCart";

export default function ProductPage({ product }) {
  const [selectedProduct, selectedProductSet] = useState(product);

  // useEffect(() => {
  //   selectedProductSet(products);
  // }, []);

  return (
    <ProductPageContentDiv>
      <ProductHeader>
        <ProductTextDiv>
          <ProductTitle>{selectedProduct.name}</ProductTitle>
          <ProductDescription>{selectedProduct.description}</ProductDescription>
          <ProductIdAndNumber>
            ProductID: {selectedProduct.id} productNumber:{" "}
            {selectedProduct.number}
          </ProductIdAndNumber>
        </ProductTextDiv>
        <ProductRatingDiv rating={selectedProduct.rating} />
      </ProductHeader>

      <ProductContent>
        <ProductMainDiv>
          <ProductImageDiv>
            {selectedProduct.image[0] !== [] ? (
              <img src={selectedProduct.image[0]} height={"256"} />
            ) : (
              console.log("here")
            )}
          </ProductImageDiv>
        </ProductMainDiv>

        <ProductSecondaryDiv>
          <ProductShopDiv>
            <ProductBeforePrice>
              {selectedProduct.beforePrice}
            </ProductBeforePrice>
            <ProductNowPrice>{selectedProduct.price}.-</ProductNowPrice>
            <AddToShoppingCart>Add To Shopping Cart</AddToShoppingCart>
          </ProductShopDiv>
        </ProductSecondaryDiv>
      </ProductContent>
    </ProductPageContentDiv>
  );
}
