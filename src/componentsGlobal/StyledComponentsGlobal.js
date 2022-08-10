import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../img/Search.svg";
import {
  AddToCart,
  searchBarInput,
  shopCart,
  supportIcon,
  useShoppingCartCounter,
} from "./ComponentsGlobal";
import { productShowCase } from "./ProductShowCase";

export const NavBar = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 4rem;
  left: 0;
  right: 0;
`;

export const NavLink = styled(Link)`
  color: black;
  margin-left: 1rem;
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 0.2rem;
  margin-left: 1rem;

  :hover {
    filter: brightness(1.2);
  }
`;
export const StyledMainProduct = styled.div`
  background-color: red;
`;

export const MainCategories = styled.a`
  list-style: none;
`;
export const MainCategory = styled.li`
  color: blue;
`;

export const SearchBarInput = styled(searchBarInput)`
  flex: 1;
  margin-right: auto;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 1.5rem;
  text-align: center;
  height: 2rem;
  font-size: 1.2rem;
  border: 0.2rem black solid;
  width: 100%;
  max-width: 50rem;
`;

export const SearchBarResultDiv = styled.div`
  position: absolute;
  border: 2px solid black;
  width: auto;
  height: auto;
  margin-top: 2rem;
  margin-left: -2px;
  background-color: black;
`;

export const SupportDropDownDiv = styled.div`
  position: absolute;
  border: 2px solid black;
  width: auto;
  height: auto;
  margin-left: -8rem;
  border-radius: 8px;
  background-color: black;

  h2 {
    color: white;
    text-align: center;
    &.text {
      font-size: 1.5rem;
    }
  }
`;

export const SearchBarProductResultDiv = styled.div`
  display: flex;
  color: white;

  :hover {
    background-color: gray;
    filter: brightness(1.2);
  }
`;

export const SearchBarProductTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8rem;
`;

export const SearchBarProductName = styled.h2`
  font-size: 2rem;
`;

export const SearchBarProductDisc = styled.p`
  margin: 0;
  font-weight: 200;
`;

export const SearchBarProductId = styled.p``;

export const ShoppingCart = styled(shopCart)`
  justify-self: right;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;

export const SupportIcon = styled(supportIcon)`
  width: 2.5rem;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const UseShoppingCartCounter = styled(useShoppingCartCounter)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 1.5rem;
  height: 1.5rem;
  background-color: black;
  text-align: center;
  color: white;
  border-radius: 50%;
`;

export const ProductShowCaseDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
`;

export const NoStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NoStyledLinkWhite = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const AddToCartStyled = styled(AddToCart)`
  color: white;
  border: none;
  background: black;
  height: 2rem;

  :hover {
    filter: brightness(1.2);
  }
`;

export const SearchBarMainDiv = styled.div`
  display: flex;
  margin-right: auto;
`;

export const ProductShowCase = styled(productShowCase)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 25rem;
  width: 10rem;

  & img {
    height: auto;
    width: 10rem;
  }
`;
