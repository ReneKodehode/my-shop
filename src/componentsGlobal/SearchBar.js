import React, { useEffect, useRef, useState } from "react";
import {
  NoStyledLink,
  NoStyledLinkWhite,
  SearchBarInput,
  SearchBarMainDiv,
  SearchBarProductDisc,
  SearchBarProductId,
  SearchBarProductName,
  SearchBarProductResultDiv,
  SearchBarProductTextDiv,
  SearchBarResultDiv,
} from "./StyledComponentsGlobal";
import Products from "../ProductLists";

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchBarValue("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <SearchBarMainDiv>
      <SearchBarInput
        value={searchBarValue}
        setSearchBarValue={setSearchBarValue}
      ></SearchBarInput>
      <SearchBarContainer
        inputRef={wrapperRef}
        searchBarValue={searchBarValue}
      ></SearchBarContainer>
    </SearchBarMainDiv>
  );
};

export const SearchBarContainer = ({ searchBarValue, inputRef }) => {
  const [productSearch, setProductSearch] = useState(Products[5]);
  if (searchBarValue) {
    console.log(productSearch);
    return (
      <SearchBarResultDiv ref={inputRef}>
        <SearchBarProductResult
          product={productSearch}
        ></SearchBarProductResult>
        <SearchBarProductResult
          product={productSearch}
        ></SearchBarProductResult>
        <SearchBarProductResult
          product={productSearch}
        ></SearchBarProductResult>
      </SearchBarResultDiv>
    );
  }
};

export const SearchBarProductResult = ({ product }) => {
  return (
    <NoStyledLinkWhite
      to={"../product" + product.category + product.id}
      color={"white"}
    >
      <SearchBarProductResultDiv key={product.id}>
        <img
          src={product.image[0]}
          width={"100"}
          height={"120"}
          alt={"a product"}
        ></img>
        <SearchBarProductTextDiv>
          <SearchBarProductName>{product.name}</SearchBarProductName>
          <SearchBarProductDisc>{product.description}</SearchBarProductDisc>
          <SearchBarProductId>ID: {product.id}</SearchBarProductId>
        </SearchBarProductTextDiv>
      </SearchBarProductResultDiv>
    </NoStyledLinkWhite>
  );
};
