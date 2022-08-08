import React from "react";
import { useEffect, useState } from "react";
import { StyledLink } from "./StyledComponentsGlobal";

export const BreadCrumbs = ({ thisCategory }) => {
  const [newArray, setNewArray] = useState([]);
  const [newCategory, setNewCategory] = useState(
    thisCategory.split("/").filter((n) => n)
  );

  useEffect(() => {
    setNewCategory(thisCategory.split("/").filter((n) => n));
  }, [thisCategory]);

  useEffect(() => {
    if (newCategory[0] === "category") {
      newCategory.shift();
    }
    for (let some in newCategory) {
      if (some === "0") {
        setNewArray(() => [`${newCategory[0]}`]);
      }
      if (some === "1") {
        setNewArray((newArray) => [
          ...newArray,
          `${newCategory[0] + "/" + newCategory[1]}`,
        ]);
      }
      if (some === "2") {
        setNewArray((newArray) => [
          ...newArray,
          `${newCategory[0] + "/" + newCategory[1] + "/" + newCategory[2]}`,
        ]);
      }
      if (some === "3") {
        setNewArray((newArray) => [
          ...newArray,
          `${
            newCategory[0] +
            "/" +
            newCategory[1] +
            "/" +
            newCategory[2] +
            "/" +
            newCategory[3]
          }`,
        ]);
      }
      if (some === "4") {
        setNewArray((newArray) => [
          ...newArray,
          `${
            newCategory[0] +
            "/" +
            newCategory[1] +
            "/" +
            newCategory[2] +
            "/" +
            newCategory[3] +
            "/" +
            newCategory[4]
          }`,
        ]);
      }
      if (some === "5") {
        setNewArray((newArray) => [
          ...newArray,
          `${
            newCategory[0] +
            "/" +
            newCategory[1] +
            "/" +
            newCategory[2] +
            "/" +
            newCategory[3] +
            "/" +
            newCategory[4] +
            "/" +
            newCategory[5]
          }`,
        ]);
      }
    }
  }, [newCategory]);

  return (
    <>
      <StyledLink to={"/"}>/home</StyledLink>

      {newCategory.map((category, index) =>
        category === "category" ? null : (
          <StyledLink key={index} to={"/category/" + newArray[index]}>
            {`/${category}`}
          </StyledLink>
        )
      )}
    </>
  );
};
