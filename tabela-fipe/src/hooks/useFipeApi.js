import { useState } from 'react';

export const useFipeApi = (service) => {
  const [loading, setLoading] = useState(false);

  const fetch = async (callback) => {
    setLoading(true);
    try {
      return await callback();
    } catch (err) {
      console.error('Erro na API:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetch, loading };
};
