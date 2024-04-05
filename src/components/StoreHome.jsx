
import { Typography } from "antd";
import axios from "axios";
// import { Container } from "postcss";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Container, HStack } from "@chakra-ui/react";

const { Title } = Typography;
const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/any',
  headers: {
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

function Storhome() {

  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        setStocks(response.data.slice(10, 19)); // Limit to first 10 stocks
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
        setError(error); // Set error state if there is an error during fetching
        setLoading(false); // Set loading to false when error occurs
      }
    }

    fetchStocks();
  }, []);

  return (
    <Container maxW="container.md">
      <style>
        {`
        .stock-card {
          background-color: #ffffff;
          border: 2px solid #007bff;
          border-radius: 10px;
          padding: 20px;
          width: calc(33.33% - 40px); /* Adjust the width to fit three cards in one row */
          margin-right: 20px;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .stock-card:hover {
          transform: translateY(-5px);
        }

        .stock-info {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .heading {
          margin-bottom: 20px;
        }

        .stock-cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between; /* Align items with space between */
        }
        `}
      </style>
      {/* <Title level={2} className="heading">Top 10 Stocks</Title> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <HStack spacing="20px" className="stock-cards-container">
          {stocks.map((stock, index) => (
            <div className="stock-card" key={index}>
              <p className="stock-info">Company: {stock?.identifier}</p>
              <p className="stock-info">Symbol: {stock?.symbol}</p>
              <p className="stock-info">Open: {stock?.open}</p>
              <p className="stock-info">Change: {stock?.change}</p>
              <p className="stock-info">Day High: {stock?.dayHigh}</p>
              <p className="stock-info">Day Low: {stock?.dayLow}</p>
              <p className="stock-info">Last Update Time: {stock?.lastUpdateTime}</p>
            </div>
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Storhome;