import { BreadCrumbs } from "../componentsGlobal/breadcrumbs";
import {
  ProductShowCase,
  ProductShowCaseDiv,
} from "../componentsGlobal/StyledComponentsGlobal";
import Products from "../ProductLists";
import {
  CategoryPageDiv,
  ShortcutLinkDiv,
} from "./categoryPage/StyledCategory";

export default function CategoryPage({ thisCategory }) {
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
        <BreadCrumbs thisCategory={thisCategory}></BreadCrumbs>
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
