import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  // Test that the useCounter hook starts with the initial value and provides increment and decrement functionality
  test("initializes and updates correctly", () => {
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

  // Test localStorage persistence when a storageKey is provided
  test("persists count to localStorage when storageKey is provided", () => {
    const storageKey = "counter-test";

    const { result, rerender } = renderHook(({ key }) => useCounter(5, key), {
      initialProps: { key: storageKey },
    });

    // Starts with initial value
    expect(result.current.count).toBe(5);
    expect(window.localStorage.getItem(storageKey)).toBe("5");

    // Increment and check persistence
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
    expect(window.localStorage.getItem(storageKey)).toBe("6");

    // Rerender hook (simulate remount) should read stored value
    rerender({ key: storageKey });
    expect(result.current.count).toBe(6);
  });

  // Test that invalid stored value falls back to initialValue
  test("falls back to initialValue if stored value is invalid", () => {
    const storageKey = "counter-invalid";
    window.localStorage.setItem(storageKey, "not-a-number");
    const { result } = renderHook(() => useCounter(10, storageKey));
    expect(result.current.count).toBe(10);
  });
});
