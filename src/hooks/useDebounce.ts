import { useState, useEffect } from "react";

/**
 * Debounces a value and returns the debounced version.
 * @param value - The value to debounce
 * @param delay - Delay in ms
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
