import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// Test that the Counter component renders with initial count and updates on button clicks
test("Counter component initializes and updates correctly", () => {
  render(<Counter initialCount={0} />);

  // Initial count should be 0
  const countDisplay = screen.getByTestId("count-value");
  expect(countDisplay).toHaveTextContent("0");

  // Click increment button
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("1");

  // Click decrement button
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("0");
});
