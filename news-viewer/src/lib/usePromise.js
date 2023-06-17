import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // promise의 대기 중, 완료, 실패에 대한 상태 관리를 위한 useState
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator(); // promiseCreator 함수가 완료되어야 다음 줄로 넘어감 (NewsList의 axios.get())
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}
