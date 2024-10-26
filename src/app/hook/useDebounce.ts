import { useEffect, useState } from "react";

const useDebounce = (value: number, delay: number) => {
  const [debounce, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounce;
};

export default useDebounce;
