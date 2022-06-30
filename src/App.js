import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DropdownMenu from "./componentsGlobal/DropdownProductsMenuComp";
import DropdownMenuComp from "./componentsGlobal/DropDownUserMenu";
import { GlobalStyled } from "./componentsGlobal/GlobalStyle";
import {
  NavBar,
  NavLink,
  Logo,
  SearchBar,
  ShoppingCart,
} from "./componentsGlobal/StyledComponentsGlobal";
import CategoryPage from "./pages/CategoryPage";
import LandingPage from "./pages/LandingPage.js";
import PageNotFound404 from "./pages/PageNotFound404";
import ProductPage from "./pages/ProductPage";
import Products from "./ProductLists";
import Categories from "./CategoryList";
import { useState, useEffect } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState([Categories]);

  useEffect(() => {
    setSelectedCategory(Categories);
  }, []);

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyled />
        <NavBar>
          <Logo to="/">My-Shop</Logo>
          <DropdownMenu products={Products}></DropdownMenu>
          <SearchBar></SearchBar>
          <DropdownMenuComp />
          <NavLink to="/product-page">
            <ShoppingCart></ShoppingCart>
          </NavLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/product-page"
            element={<ProductPage product={Products[1]} />}
          />
          {/* add routes to each product */}
          {Products.map((product, index) => (
            <Route
              key={index}
              path={`/product${product.category}${product.id}`}
              element={<ProductPage product={product} />}
            ></Route>
          ))}
          {/* add routes to each category */}
          {selectedCategory.map((category, index) => (
            <Route
              key={index}
              path={`${category}`}
              element={<CategoryPage thisCategory={category} />}
            ></Route>
          ))}
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
