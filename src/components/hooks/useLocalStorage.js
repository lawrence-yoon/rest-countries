import { useDebugValue } from "react";
import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  // first useeffect, handles getting value from storage.
  // second useeffect, handles updating stored value when we change value in our state.
  useEffect(() => {
    const stored = getSavedValue(key, initialValue);
    setValue(stored ? stored : initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useDebugValue(value ?? "loading...");

  return [value, setValue];
}
