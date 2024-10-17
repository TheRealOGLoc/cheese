import { render, screen } from "@testing-library/react";
import Cheese from "../Cheese";
import { CheeseType } from "../../../types/types";

// Mock data for testing
const mockCheeses: CheeseType[] = [
  {
    id: 1,
    name: "Barlocco",
    price: 13,
    color: "Blue",
    description: "...",
    imageUrl: "...",
  },
  {
    id: 2,
    name: "Dorset Red",
    price: 25,
    color: "Red",
    description: "...",
    imageUrl: "...",
  },
];

// Mock the useData hook
jest.mock("../../DataContext/DataContext", () => ({
  useData: () => ({
    cheeses: mockCheeses,
  }),
}));

test("Displays cheese cards correctly", () => {
  render(<Cheese />);

  // Verify that the correct number of cheese cards are displayed
  const cheeseCards = screen.getAllByTestId("cheese-card");
  expect(cheeseCards.length).toBe(2); // Expecting two cheese cards

  // Verify that the cheese names are displayed correctly
  expect(screen.getByText("Barlocco")).toBeInTheDocument();
  expect(screen.getByText("Dorset Red")).toBeInTheDocument();
});
