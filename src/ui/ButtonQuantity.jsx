import { Children } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
} from "../features/cart/cartSlice";

function ButtonQuantity({ pizzaId }) {
  const quantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === pizzaId).quantity,
  );
  //   const quantity = q.quantity;
  const dispatch = useDispatch();

  function onClickIncHandle() {
    dispatch(IncreaseItemQuantity(pizzaId));
  }
  function onClickDecHandle() {
    dispatch(DecreaseItemQuantity(pizzaId));
  }

  return (
    <>
      <Button type="round" onClick={onClickIncHandle}>
        +
      </Button>
      {quantity}
      <Button type="round" onClick={onClickDecHandle}>
        -
      </Button>
    </>
  );
}

export default ButtonQuantity;
