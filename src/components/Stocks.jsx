"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, VStack, Input, CardHeader, Heading, CardBody, Stack, Box, Text, StackDivider, Card } from '@chakra-ui/react';
import { Typography } from 'antd';
import Loader from './Loader';
const { Title } = Typography;

const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/any',
  headers: {
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setStocks(response.data.slice(200, 299)); // Set stocks data in state
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
    <>

      <Container maxW="container.md">
        <Title level={2} className="text-3xl font-bold mb-6">Stocks Stats</Title>
        <Input placeholder="Search..." className="w-full mb-6" />
        {loading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <VStack spacing="6" align="stretch">
            {stocks.map((stock, index) => (
              <div key={index}>
                <Card>
                 

                  <CardBody>
                    <h1 className=' font-bold mb-3 border-b-2 text-center border-r-4'>Company: <span className='text-blue-700 mb-1'>{stock?.identifier} </span> </h1>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Symbol: </h2>
                          <p>{stock?.symbol}</p>
                        </div>
                      </Box>
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Open: </h2>
                          <p>{stock?.open}</p>
                        </div>
                      </Box>
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Change: </h2>
                          <p>{stock?.change}</p>
                        </div>
                      </Box>
                     
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Day High: </h2>
                          <p>{stock?.dayHigh}</p>
                        </div>
                      </Box>
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Day Low: </h2>
                          <p>{stock?.dayLow}</p>
                        </div>
                      </Box>
                      <Box>
                        <div className='flex gap-1'>
                          <h2 className=' font-bold'>Last Update Time: </h2>
                          <p>{stock?.lastUpdateTime}</p>
                        </div>
                      </Box>
                     
                    </Stack>
                  </CardBody>
                </Card>
              </div>

              // <div key={index} className={`bg-gray-100 p-6 rounded-md shadow-md ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
              //   <p className="text-sm mb-2">Company: {stock?.identifier}</p>
              //   <p className="text-sm mb-2">Symbol: {stock?.symbol}</p>
              //   <p className="text-sm mb-2">Open: {stock?.open}</p>
              //   <p className="text-sm mb-2">Change: {stock?.change}</p>
              //   <p className="text-sm mb-2">Day High: {stock?.dayHigh}</p>
              //   <p className="text-sm mb-2">Day Low: {stock?.dayLow}</p>
              //   <p className="text-sm mb-2">Last Update Time: {stock?.lastUpdateTime}</p>
              // </div>


            ))}
          </VStack>
        )}
      </Container>

    </>
  );
};

export default Stocks;
