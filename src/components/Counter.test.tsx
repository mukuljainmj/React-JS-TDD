import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Counter from "./Counter";

// Mock the analytics service and use vitest runner

vi.mock("../services/analytics", () => {
  return {
    default: {
      logEvent: vi.fn(),
    },
  };
});

import analyticsService from "../services/analytics";

describe("Counter", () => {
  // test that the analyticsService.logEvent is called correctly on increment and decrement
  test("logs analytics events on increment and decrement", () => {
    render(<Counter initialCount={0} />);

    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    // Initial logEvent calls should be zero
    expect(analyticsService.logEvent).toHaveBeenCalledTimes(0);

    // Click increment button
    fireEvent.click(incrementButton);
    expect(analyticsService.logEvent).toHaveBeenCalledWith(
      "counter_increment",
      { from: 0, to: 1 }
    );

    // Click decrement button
    fireEvent.click(decrementButton);
    expect(analyticsService.logEvent).toHaveBeenCalledWith(
      "counter_decrement",
      { from: 1, to: 0 }
    );

    // Total calls should be 2
    expect(analyticsService.logEvent).toHaveBeenCalledTimes(2);
  });
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
});
