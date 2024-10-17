import { useState } from "react";
import { CheeseType } from "../../types/types";
import { useData } from "../DataContext/DataContext";

export default function CheeseCard({ cheese }: { cheese: CheeseType }) {
  const { addToCart } = useData();
  const { id, name, price, color, description, imageUrl } = cheese;
  const [weight, setWeight] = useState<number>(0);

  // update the weight
  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      value = parseFloat(value.toFixed(1));
      setWeight(value);
    } else {
      setWeight(0);
    }
  };

  // add to the cart
  const _handleAddToCart = () => {
    if (weight > 0) {
      addToCart(id, weight)
    } else {
      alert("Please enter a valid weight");
    }
  };

  return (
    <div className="max-w-[400px] border p-4 rounded-lg m-2">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-60 object-cover mb-2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
          <span className="p-2">{description}</span>
        </div>
      </div>
      <div className="font-bold text-lg">{name}</div>
      <div>Color: {color}</div>
      <div>Price: {price}$/kg</div>
      <div className="flex items-center">
        <input
          type="number"
          value={weight}
          onChange={_handleChange}
          className="border-2 border-black"
        />
        <div>KG</div>
      </div>
      <div>Total Price: {(price * weight).toFixed(2)}</div>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
        onClick={_handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
