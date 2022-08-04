import {
  ProductList,
  TotalCheckout,
  UseClearListButton,
} from "./shoppingCartPage/ShoppingCartComponents";
import {
  CheckOutButton,
  CheckOutDiv,
  CheckOutMainDiv,
  ShoppingCartDiv,
  Title,
  TitleDiv,
} from "./shoppingCartPage/ShoppingCartStyle";

const ShoppingCartPage = () => {
  return (
    <ShoppingCartDiv>
      <TitleDiv>
        <Title>Shopping cart</Title>
        <UseClearListButton></UseClearListButton>
      </TitleDiv>

      {/* TODO: click and go to product */}
      <ProductList></ProductList>

      <CheckOutMainDiv>
        <TotalCheckout></TotalCheckout>
      </CheckOutMainDiv>
    </ShoppingCartDiv>
  );
};

export default ShoppingCartPage;
