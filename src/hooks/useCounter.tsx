// Create useCounter hook that starts from an initial value and provides increment and decrement functions
import { useState } from "react";

export default function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}
