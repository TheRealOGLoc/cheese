import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartType, CheeseType } from "../../types/types";
import { getCheeses } from "../../utl/get-cheeses";

type CartContextType = {
  cheeses: CheeseType[]
  cart: CartType[];
  addToCart: (id: number, weight: number) => void;
  updateCart: (id: number, weight: number) => void;
  removeFromCart: (id: number) => void;
};

export const DataContext = createContext<CartContextType | undefined>(undefined);

// data provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType[]>([]);
  const [cheeses, setCheeses] = useState<CheeseType[]>([])

  // get all cheeses' data, only run once
  useEffect(() => {
    async function GetAllCheeses() {
      const data = await getCheeses()
      setCheeses(data)
    }
    GetAllCheeses()
  }, [])

  // add to cart
  const addToCart = (id: number, weight: number) => {
    setCart((prevCart) => {
      // if target exist in the current cart
      const existItem = cart.find(item => item.id === id)
      if (existItem) {
        return prevCart.map(item => 
          // add the new and old weight together
          item.id === id ? {...item, weight: item.weight + weight } : item
        )
      } else {
        return [...prevCart, { id, weight }];
      }
    })
  };

  // replace the old weight with new weight
  const updateCart = (id: number, weight: number) => {
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.id === id ? {...item, weight} : item
      )
    })
  }

  // find and remove the target
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  }

  return (
    <DataContext.Provider value={{ cheeses, cart, addToCart, updateCart, removeFromCart }}>
      {children}
    </DataContext.Provider>
  );
};

// data distributor
export const useData = (): CartContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a CartProvider");
  }
  return context;
};
