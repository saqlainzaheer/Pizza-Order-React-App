import { formatCurrency } from "../../utils/helpers";
import DeleteButton from "../../ui/DeleteButton";
import ButtonQuantity from "../../ui/ButtonQuantity";

function CartItem({ item }) {
  console.log(item);
  const { pizzaId, name, quantity, totalprice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalprice)}</p>
        <div>
          <ButtonQuantity pizzaId={pizzaId} quantity={quantity} />
          <DeleteButton pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
