import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";
import ButtonQuantity from "../../ui/ButtonQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentquantity = useSelector((state) =>
    state.cart.cart.find((item) => (item.pizzaId === id ? item.quantity : 0)),
  );

  const isInCart = currentquantity;
  function onClickHandle() {
    const cartNewItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalprice: 1 * unitPrice,
    };
    dispatch(addItem(cartNewItem));
  }

  //const isinCart=

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div>
              <ButtonQuantity pizzaId={id} />
              <DeleteButton pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={onClickHandle}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
