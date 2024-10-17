import { CartType } from "../../types/types"
import { useData } from "../DataContext/DataContext"
import CartItem from "./CartItem"

export default function Cart() {
  const { cart, cheeses } = useData();
  const total = cart.reduce((acc, item) => {
    const cheese = cheeses.find((cheeseItem) => cheeseItem.id === item.id);
    if (cheese) {
      return acc + cheese.price * item.weight;
    }
    return acc;
  }, 0);
  return (
    <div className="max-w-[1250px] m-auto ">
      <div className="flex flex-col">

        {
          cart.map((item: CartType, index: number) => <CartItem cart={item} key={index} />)
        }
      </div>
      <div className="text-right text-3xl my-3">Total: {total.toFixed(2)}</div>
    </div>

  )
}
