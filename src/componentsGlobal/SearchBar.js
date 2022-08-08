import React, { useEffect, useRef, useState } from "react";
import {
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

function FindRelatedToSearch(products, searchBarValue) {
  const search = searchBarValue.toLowerCase().split(" ");
  const returnResults = new Set();

  for (const product of products) {
    const name = product.name.toLowerCase();
    const keywords = [];
    const descriptions = [];
    for (const keyword of product.keywords) {
      keywords.push(keyword.toLowerCase());
    }
    for (const description of product.description) {
      descriptions.push(description.toLowerCase());
    }
    for (const some of search) {
      if (some === name) {
        returnResults.add(product);
      } else if (keywords.includes(some)) {
        returnResults.add(product);
      } else if (descriptions.includes(some)) {
        returnResults.add(product);
      }
    }
  }

  return Array.from(returnResults);
}

export const SearchBarContainer = ({ searchBarValue, inputRef }) => {
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    setProductSearch(FindRelatedToSearch(Products, searchBarValue));
  }, [searchBarValue]);

  console.log(productSearch.length);

  if (searchBarValue && productSearch.length) {
    console.log(productSearch);

    for (const some of productSearch) {
      if (productSearch.length === 1) {
        return (
          <SearchBarResultDiv ref={inputRef}>
            <SearchBarProductResult
              product={productSearch[0]}
            ></SearchBarProductResult>
          </SearchBarResultDiv>
        );
      } else if (productSearch.length === 2) {
        return (
          <SearchBarResultDiv ref={inputRef}>
            <SearchBarProductResult
              product={productSearch[0]}
            ></SearchBarProductResult>
            <SearchBarProductResult
              product={productSearch[1]}
            ></SearchBarProductResult>
          </SearchBarResultDiv>
        );
      } else {
      }
      return (
        <SearchBarResultDiv ref={inputRef}>
          <SearchBarProductResult
            product={productSearch[0]}
          ></SearchBarProductResult>
          <SearchBarProductResult
            product={productSearch[1]}
          ></SearchBarProductResult>
          <SearchBarProductResult
            product={productSearch[2]}
          ></SearchBarProductResult>
        </SearchBarResultDiv>
      );
    }
  }
};

export const SearchBarProductResult = ({ product }) => {
  return (
    <NoStyledLinkWhite to={"../product" + product.category + product.id}>
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
