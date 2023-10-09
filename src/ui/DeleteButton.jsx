import { useDispatch } from "react-redux";
import Button from "./Button";
import { DeleteItem } from "../features/cart/cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  function onClickHandle() {
    dispatch(DeleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={onClickHandle}>
      Delete
    </Button>
  );
}

export default DeleteButton;
