// Create useCounter hook that starts from an initial value and provides increment and decrement functions
import { useState, useEffect } from "react";

export default function useCounter(initialValue: number, storageKey?: string) {
  const [count, setCount] = useState(() => {
    if (storageKey && typeof window !== "undefined") {
      const stored = window.localStorage.getItem(storageKey);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!Number.isNaN(parsed)) return parsed;
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (storageKey && typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, String(count));
    }
  }, [count, storageKey]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}
