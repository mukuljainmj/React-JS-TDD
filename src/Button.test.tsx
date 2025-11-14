import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

// Test that button renders with correct text
test("renders button with correct text", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
