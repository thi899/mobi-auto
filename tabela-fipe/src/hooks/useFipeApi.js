import { useState } from 'react';
import axios from 'axios';

export const useFipeApi = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error('Erro na API:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading };
};
