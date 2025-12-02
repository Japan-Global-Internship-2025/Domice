import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('로컬 스토리지 읽기 에러:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore = JSON.stringify(storedValue);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error('로컬 스토리지 쓰기 에러:', error);
    }
  }, [key, storedValue]); 

  return [storedValue, setStoredValue];
}

<<<<<<< HEAD
export default useLocalStorage; 
=======
export default useLocalStorage;
>>>>>>> b350e01c4306cdb49dea7c1db5a8a485e32c1fff
