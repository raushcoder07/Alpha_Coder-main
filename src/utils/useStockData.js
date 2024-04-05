// useStockData.js
import { useEffect, useState } from "react";
import axios from "axios";

const server = 'https://twelve-data1.p.rapidapi.com';
const apiKey = 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'; // Replace this with your actual API key

const useStockData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`${server}/stocks`, {
          headers: {
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
          }
        });

        // Check if the response contains the expected data structure
        if (response.data && response.data.data) {
          setData(response.data.data); // Set the fetched data
          setLoading(false);
        } else {
          throw new Error('Invalid data format received from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return { data, loading, error };
};

export default useStockData;
