import styled from "styled-components";
import { productRatingDiv } from "./ProductComponents";

export const ProductPageContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProductTitle = styled.h1``;

export const ProductDescription = styled.h2``;

export const ProductIdAndNumber = styled.h6``;

export const ProductMainDiv = styled.div`
  width: 75vw;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductSecondaryDiv = styled.div`
  width: 25vw;
`;

export const ProductTextDiv = styled.div`
  flex-direction: column;
  margin-right: auto;
`;

export const ProductRatingDiv = styled(productRatingDiv)`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-top: auto;

  p {
    width: 50px;
  }

  img {
    width: 50px;
  }
`;

export const ProductShopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductBeforePrice = styled.p`
  text-decoration: line-through;
  text-align: left;
`;

export const ProductNowPrice = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddToShoppingCart = styled.button``;

export const ProductImageDiv = styled.div`
  width: auto;
  height: 256px;
  background-color: gray;
`;
