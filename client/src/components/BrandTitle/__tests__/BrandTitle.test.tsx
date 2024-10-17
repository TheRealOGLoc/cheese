import { render, screen, cleanup } from "@testing-library/react";
import BrandTitle from "../BrandTitle";

test("Should render the title", () => {
  render(<BrandTitle/>);
  const titleElement = screen.getByTestId("title-test-1");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent("PZ Cheese!")
});
