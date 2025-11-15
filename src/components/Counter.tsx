// Create a Counter component that accepts an initialCount prop and has increment and decrement buttons
import React, { useEffect, useRef } from "react";
import useCounter from "../hooks/useCounter";
import analyticsService from "../services/analytics";

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  // Add Keyboard interactions - arrow keys and plus/minus keys should control the counter

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
      case "+":
        increment();
        break;
      case "ArrowDown":
      case "-":
        decrement();
        break;
      default:
        break;
    }
  };

  const { count, increment, decrement } = useCounter(initialCount);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [increment, decrement]);

  // Log analytics after state changes to ensure we capture the committed value
  const prevCountRef = useRef(count);
  useEffect(() => {
    const prev = prevCountRef.current;
    if (prev !== count) {
      const eventName =
        count > prev ? "counter_increment" : "counter_decrement";
      analyticsService.logEvent(eventName, { from: prev, to: count });
      prevCountRef.current = count;
    }
  }, [count]);

  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
