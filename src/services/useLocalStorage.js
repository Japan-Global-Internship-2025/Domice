import { useState, useEffect } from 'react';

// 키를 받아서 로컬 스토리지를 읽고 쓰는 커스텀 훅
function useLocalStorage(key, initialValue) {
  
  // 1. 초기 상태 설정
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // 로컬 스토리지에서 해당 키의 값을 가져옵니다.
      const item = window.localStorage.getItem(key);
      
      // 값이 있으면 JSON.parse를 통해 객체 형태로 변환하여 반환, 없으면 초기값 반환
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('로컬 스토리지 읽기 에러:', error);
      return initialValue;
    }
  });

  // 2. 상태(storedValue)가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    try {
      // 상태 값을 JSON 문자열로 변환합니다. (중요)
      const valueToStore = JSON.stringify(storedValue);
      // 로컬 스토리지에 저장합니다.
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error('로컬 스토리지 쓰기 에러:', error);
    }
  }, [key, storedValue]); // key나 storedValue가 바뀔 때만 실행

  // 현재 상태 값과 업데이트 함수를 반환합니다. (useState와 동일)
  return [storedValue, setStoredValue];
}

export default useLocalStorage;