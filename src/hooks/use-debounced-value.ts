import { useEffect, useState } from 'react';

/**
 * Hook provides `debouncedValue` which will be set after delay when `value` is not changed during this time
 * @param value value to be debounced
 * @param delay time in ms
 * @returns `debouncedValue` that will be set after delay
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(function setValueForDebounce() {
      setDebouncedValue(value);
    }, delay);

    return function cleanup() {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
