import { CheeseType } from "../../types/types";
import {useData } from "../DataContext/DataContext";
import CheeseCard from "./CheeseCard";

export default function Cheese() {
  const { cheeses } = useData()

  return (
    <div className="max-w-[1250px] m-auto flex flex-wrap">
      {
        cheeses && cheeses.length !== 0 && 
        cheeses.map((cheese: CheeseType, index: number) => (
          <CheeseCard key={index} cheese={cheese} />
        ))
      }
    </div>
  );
}
