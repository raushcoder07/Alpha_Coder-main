"use clinet";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Spinner } from '@chakra-ui/react';

const options = {
  method: 'GET',
  url: 'https://nse-market.p.rapidapi.com/stocks',
  params: { symbol: 'itc' },
  headers: {
    'X-RapidAPI-Host': 'nse-market.p.rapidapi.com',
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'
  }
};

const Learn = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="stock-info">
          {stockData && (
            <>
              <div className="row">
                <span className="label">Symbol:</span>
                <span className="value">{stockData.Symbol}</span>
              </div>
              <div className="row">
                <span className="label">Last Price:</span>
                <span className="value">{stockData.LastPrice}</span>
              </div>
              <div className="row">
                <span className="label">Day High:</span>
                <span className="value">{stockData.DayHigh}</span>
              </div>
              <div className="row">
                <span className="label">Day Low:</span>
                <span className="value">{stockData.DayLow}</span>
              </div>
              {/* Add more rows for other data */}
            </>
          )}
        </div>
      )}
      <style jsx>{`
        .container {
          margin: 20px;
        }
        .stock-info {
          border: 1px solid #ccc;
          padding: 20px;
        }
        .row {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        .label {
          font-weight: bold;
          margin-right: 10px;
        }
        .value {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Learn;