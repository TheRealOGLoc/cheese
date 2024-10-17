import { CheeseType } from "../types/types";

// get all cheeses
export async function getCheeses(): Promise<CheeseType[]> {
  try {
    const response = await fetch("http://localhost:5000/cheeses", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching cheeses: ${response.statusText}`);
    }

    const data = await response.json();
    return data as CheeseType[];
  } catch (error) {
    console.error("Failed to fetch cheeses:", error);
    return [];
  }
}
