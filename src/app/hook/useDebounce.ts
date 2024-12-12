import { useEffect, useState } from 'react';

const useDebounce = (value: number, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounceValue;
};

export default useDebounce;
