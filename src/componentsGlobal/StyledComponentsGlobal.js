import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../img/Search.svg";
import { searchBar, shopCart } from "./ComponentsGlobal";
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

export const SearchBar = styled(searchBar)`
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
`;

export const ShoppingCart = styled(shopCart)`
  justify-self: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;

export const ProductShowCaseDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;

export const ProductShowCase = styled(productShowCase)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 25rem;
  width: 10rem;

  span {
    cursor: pointer;
  }
  & img {
    height: auto;
    width: 10rem;
  }
  & button {
    color: white;
    border: none;
    background: black;
    height: 2rem;
  }
  button:hover {
    filter: brightness(1.2);
  }
`;
