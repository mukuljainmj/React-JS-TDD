// Create a Counter component that accepts an initialCount prop and has increment and decrement buttons
import React from "react";
import useCounter from "../hooks/useCounter";

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
