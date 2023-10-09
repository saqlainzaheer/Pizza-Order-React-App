import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cartItems = useSelector((state) => state.cart.cart);
  const [Quantity, Price] = cartItems.reduce(
    (total, Item) => {
      total[0] += Item.quantity;
      total[1] += Item.totalprice;
      return [total[0], total[1]];
    },
    [0, 0],
  );

  console.log(Quantity, Price);
  if (cartItems.length === 0) return;
  return (
    <>
      <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{Quantity} pizzas</span>
          <span>${Price}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </>
  );
}

export default CartOverview;
