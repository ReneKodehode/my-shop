import {
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
import { useState } from "react";
import { AddToCartStyled } from "../componentsGlobal/StyledComponentsGlobal";

export default function ProductPage({ product }) {
  const [selectedProduct, selectedProductSet] = useState(product);
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
            <AddToCartStyled product={selectedProduct}></AddToCartStyled>
          </ProductShopDiv>
        </ProductSecondaryDiv>
      </ProductContent>
    </ProductPageContentDiv>
  );
}
