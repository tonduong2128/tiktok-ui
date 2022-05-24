import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [deboundceValue, setDeboundceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboundceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value]);
  return deboundceValue;
}

export default useDebounce;
