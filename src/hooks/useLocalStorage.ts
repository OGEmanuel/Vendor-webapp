import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: unknown, parse?: boolean) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (parse == false ? item : JSON.parse(item)) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(
        key,
        parse == false ? valueToStore : JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          setStoredValue(
            event.newValue
              ? parse == false
                ? event.newValue
                : JSON.parse(event.newValue)
              : initialValue
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue, parse]);

  return [storedValue, setValue];
}

export default useLocalStorage;
