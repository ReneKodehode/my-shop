import { useEffect, useState } from "react";
import {
  ProductShowCase,
  ProductShowCaseDiv,
} from "../componentsGlobal/StyledComponentsGlobal";
import Products from "../ProductLists";
import {
  CategoryPageDiv,
  ShortcutLinkDiv,
  StyledLink,
} from "./categoryPage/StyledCategory";

export default function CategoryPage({ thisCategory }) {
  const [newArray, setNewArray] = useState([]);
  const [newCategory, setNewCategory] = useState(
    thisCategory.split("/").filter((n) => n)
  );

  useEffect(() => {
    setNewCategory(thisCategory.split("/").filter((n) => n));
  }, [thisCategory]);

  useEffect(() => {
    for (let some in newCategory) {
      if (some === "1") {
        setNewArray((newArray) => [`${newCategory[1]}`]);
      }
      if (some === "2") {
        setNewArray((newArray) => [
          ...newArray,
          `${newCategory[1] + "/" + newCategory[2]}`,
        ]);
      }
      if (some === "3") {
        setNewArray((newArray) => [
          ...newArray,
          `${newCategory[1] + "/" + newCategory[2] + "/" + newCategory[3]}`,
        ]);
      }
      if (some === "4") {
        setNewArray((newArray) => [
          ...newArray,
          `${
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
  }, [thisCategory, newCategory]);

  const splitCategory = thisCategory.split("/").filter((n) => n);
  const selectedCategory = splitCategory.pop();
  const selectedProducts = [];

  for (const product of Products) {
    const productCategory = product.category.split("/").filter((n) => n);
    for (const category of productCategory) {
      if (category === selectedCategory) {
        selectedProducts.push(product);
      }
    }
  }

  return (
    <CategoryPageDiv>
      <ShortcutLinkDiv>
        <StyledLink to={"/"}>/home</StyledLink>

        {newCategory.map((category, index) =>
          category === "category" ? null : (
            <StyledLink key={index} to={"/category/" + newArray[index - 1]}>
              {`/${category}`}
            </StyledLink>
          )
        )}
      </ShortcutLinkDiv>
      <ProductShowCaseDiv>
        {selectedProducts.map((product, index) => (
          <ProductShowCase
            key={index}
            productName={product.name}
          ></ProductShowCase>
        ))}
      </ProductShowCaseDiv>
    </CategoryPageDiv>
  );
}
