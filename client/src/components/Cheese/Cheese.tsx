import { CheeseType } from "../../types/types";
import {useData } from "../DataContext/DataContext";
import CheeseCard from "./CheeseCard";

export default function Cheese() {
  // get all cheeses
  const { cheeses } = useData()

  return (
    <div className="max-w-[1250px] m-auto flex flex-wrap">
      {
        cheeses && cheeses.length !== 0 && 
        cheeses.map((cheese: CheeseType, index: number) => (
          <div data-testid="cheese-card" key={index}><CheeseCard key={index} cheese={cheese} /></div>
        ))
      }
    </div>
  );
}
