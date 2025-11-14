import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

// Test that the useCounter hook starts with the initial value and provides increment and decrement functionality
test("useCounter initializes and updates correctly", () => {
  const { result } = renderHook(() => useCounter(0));

  // Initial value should be 0
  expect(result.current.count).toBe(0);

  // Increment the count
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);

  // Decrement the count
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});
