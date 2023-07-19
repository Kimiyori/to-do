import { useEffect, useState } from 'react';

export const useError = (timeout: number = 2000) => {
  const [error, setError] = useState('');

  useEffect(() => {
    error && setTimeout(() => setError(''), timeout);
  }, [error, timeout]);
  return { error, setError };
};
