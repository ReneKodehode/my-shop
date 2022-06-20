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
import LandingPage from "./pages/LandingPage.js";
import PageNotFound404 from "./pages/PageNotFound404";
import ProductPage from "./pages/ProductPage";
import Products from "./ProductLists";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router basename={process.env.PUBLIC_URL}>
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
          {Products.map((product, index) => (
            <Route
              key={index}
              path={`/product${product.category}${product.id}`}
              element={<ProductPage product={product} />}
            ></Route>
          ))}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/product-page"
            element={<ProductPage product={Products[1]} />}
          />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
