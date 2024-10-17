import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { CheeseType, CartType } from "../../../types/types";

// Mock data for testing
const mockCheeses: CheeseType[] = [
  { id: 1, name: "Barlocco", price: 13, color: "Blue", description: "", imageUrl: "" },
  { id: 2, name: "Dorset Red", price: 25, color: "Red", description: "", imageUrl: "" },
];

const mockCart: CartType[] = [
  { id: 1, weight: 2 },
  { id: 2, weight: 1.5 },
];

jest.mock("../../DataContext/DataContext", () => ({
  useData: () => ({
    cart: mockCart,
    cheeses: mockCheeses,
  }),
}));

test("Displays cart items and calculates total correctly", () => {
  render(<Cart />);

  // Check that the cart contains two items
  expect(screen.getAllByTestId("cart-item").length).toBe(2);

  // Check that the total is calculated correctly
  const total = screen.getByText(/Total:/);
  const expectedTotal = (13 * 2 + 25 * 1.5).toFixed(2); // Barlocco: 13 * 2, Dorset Red: 25 * 1.5
  expect(total).toHaveTextContent(`Total: ${expectedTotal}`);
});
