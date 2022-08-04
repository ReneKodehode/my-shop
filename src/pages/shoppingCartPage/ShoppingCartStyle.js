import styled from "styled-components";

export const ShoppingCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Title = styled.h1``;

export const RemoveProductButton = styled.button`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

export const ClearListButton = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  color: green;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 12rem;
  border-top: 2px black solid;
  border-bottom: 2px black solid;
  margin-bottom: 1rem;
`;

export const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckOutButton = styled.button`
  height: 2rem;
`;

export const CheckOutMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CheckoutItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 50vw;
`;

export const AlignProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const ProductDescription = styled.h2`
  font-size: 1rem;
  width: 20rem;
`;

export const CategoryText = styled.h2`
  font-size: 2rem;
  font-weight: 450;
`;

export const IncDecButton = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: red;
  border: none;
  border-radius: 10%;
  &.increment {
    background-color: green;
  }
`;
