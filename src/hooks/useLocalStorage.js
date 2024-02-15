import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {

    const isClient = typeof window !== 'undefined';

    const [value, setValue] = useState(() => {
        if (isClient) {
          const storedValue = localStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : initialValue;
        }
        return initialValue;
    });

    useEffect(() => {
        if (isClient) {
          localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
