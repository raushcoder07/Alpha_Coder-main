// useStockApi.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStockNewsApi = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://nse-market.p.rapidapi.com/stocks',
          params: { symbol: 'itc' },
          headers: {
            'X-RapidAPI-Host': 'nse-market.p.rapidapi.com',
            'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'
          }
        };
        const response = await axios.request(options);
        setStockData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stockData, loading };
};

export default useStockNewsApi;
