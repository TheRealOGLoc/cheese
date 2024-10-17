import { CartType } from "../../types/types";
import { useData } from "../DataContext/DataContext";

export default function CartItem({ cart }: { cart: CartType }) {
  const { id, weight } = cart;
  const { cheeses, updateCart, removeFromCart } = useData();
  
  // find target cheese based on id
  const cheese = cheeses.find((item) => item.id === id);

  // update the weight
  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      value = parseFloat(value.toFixed(1))
      updateCart(id, value)
    } else {
      updateCart(id, 0.0);
    }
  }

  return (
    <div className="p-4 border-[1px] rounded-lg border-gray-300 hover:shadow-md hover:bg-slate-50 transition">
      {cheese && (
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold w-[150px]">{cheese.name}</div>

          <div className="max-w-[300px]">
            <div className="">Price: <span>{cheese.price}$/kg</span></div>
            <div className="flex items-center">
              <span className="mr-2">Weight:</span>
              <input
                className="w-[80px] border-2 border-black"
                type="number"
                value={weight}
                onChange={_handleChange}
              /> kg
            </div>
          </div>

          <div className="text-right">
            <div className="">Item Price:</div>
            <div className="text-lg font-semibold">{(weight * cheese.price).toFixed(2)} $</div>
          </div>

          <button
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
