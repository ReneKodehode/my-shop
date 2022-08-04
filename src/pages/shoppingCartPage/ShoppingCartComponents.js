import { remove, empty, quantityInc, quantityDec } from "./../../ShoppingCart";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  AlignProductsDiv,
  CategoryText,
  CheckOutButton,
  CheckOutDiv,
  CheckoutItemDiv,
  ClearListButton,
  IncDecButton,
  ProductDescription,
  ProductDiv,
  QuantityDiv,
  RemoveProductButton,
} from "./ShoppingCartStyle";
import { NoStyledLink } from "../../componentsGlobal/StyledComponentsGlobal";

export const ProductList = () => {
  let count = useSelector(
    (state) => state.ShoppingCart.ShoppingCartList,
    shallowEqual
  );
  return count.map((product, idx) => (
    <ProductDiv key={idx}>
      <AlignProductsDiv>
        <NoStyledLink to={"../product" + product.category + product.id}>
          <img src={product.image[0]} height={"180"} width={"180"}></img>
        </NoStyledLink>
      </AlignProductsDiv>

      <AlignProductsDiv>
        <h2>{product.name}</h2>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductDescription>product ID: {product.id}</ProductDescription>
        <h2>lagerStatus: ok</h2>
      </AlignProductsDiv>
      <AlignProductsDiv>
        <CategoryText>quantity</CategoryText>
        <QuantityDiv>
          <UseDecrementButton product={product}></UseDecrementButton>

          <h2>{product.quantity}</h2>
          <UseIncrementButton product={product}></UseIncrementButton>
        </QuantityDiv>
      </AlignProductsDiv>

      <AlignProductsDiv>
        <CategoryText>price</CategoryText>
        <h2>{product.beforePrice}</h2>
      </AlignProductsDiv>

      <AlignProductsDiv>
        <CategoryText>discount:</CategoryText>
        <h2>{product.beforePrice - product.price}</h2>
      </AlignProductsDiv>

      <AlignProductsDiv>
        <CategoryText>total</CategoryText>
        <h2>{product.price * product.quantity}</h2>
      </AlignProductsDiv>

      <AlignProductsDiv>
        <CategoryText>Delete</CategoryText>
        <UseRemoveButton product={product}></UseRemoveButton>
      </AlignProductsDiv>
    </ProductDiv>
  ));
};

export const UseDecrementButton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <IncDecButton onClick={() => dispatch(quantityDec(product))}>
      -
    </IncDecButton>
  );
};

export const UseIncrementButton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <IncDecButton
      className={"increment"}
      onClick={() => dispatch(quantityInc(product))}
    >
      +
    </IncDecButton>
  );
};

export const UseClearListButton = () => {
  const dispatch = useDispatch();
  return (
    <ClearListButton onClick={() => dispatch(empty())}>
      Clear list
    </ClearListButton>
  );
};

export const UseRemoveButton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <RemoveProductButton onClick={() => dispatch(remove(product))}>
      X
    </RemoveProductButton>
  );
};

export const TotalCheckout = () => {
  let sum = 0;
  let discount = 0;
  let sumIncDiscount = 0;

  let count = useSelector(
    (state) => state.ShoppingCart.ShoppingCartList,
    shallowEqual
  );
  for (const product of count) {
    sum += sum + product.beforePrice * product.quantity;
    discount += (product.beforePrice - product.price) * product.quantity;
    sumIncDiscount += product.price * product.quantity;
  }

  return (
    <CheckOutDiv>
      <CheckoutItemDiv>
        <h2>Sum: </h2>
        <h2>{sum}</h2>
      </CheckoutItemDiv>

      <CheckoutItemDiv>
        <h2>Discount: </h2>
        <h2>{discount}</h2>
      </CheckoutItemDiv>

      <CheckoutItemDiv>
        <h2>Sum w/ discount: </h2>
        <h2>{sumIncDiscount}</h2>
      </CheckoutItemDiv>

      <CheckOutButton>Checkout</CheckOutButton>
    </CheckOutDiv>
  );
};
