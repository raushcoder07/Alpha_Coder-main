"use client";

import { Container, HStack } from "@chakra-ui/react";
import { Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import News from "./News";
import Link from "next/link";
import Stocks from "./Stocks";
import Storhome from "./StoreHome";

const { Title } = Typography;

const server = 'https://twelve-data1.p.rapidapi.com';
const apiKey = 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'; // Replace this with your actual API key

const Homepage = () => {
  const [homepage, setHomepage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        const response = await axios.get(`${server}/stocks`, {
          params: {
            limit: 10 // Limit the number of results to 10
          },
          headers: {
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
          }
        });

        if (response.data && response.data.data) {
          const limitedData = response.data.data.slice(0, 10); // Limit the data to 10 items
          setHomepage(limitedData);
          setLoading(false);
        } else {
          throw new Error('Invalid data format received from the API');
        }
      } catch (error) {
        console.error('Error fetching homepage data:', error);
        setError('Failed to fetch homepage data. Please try again later.');
        setLoading(false);
      }
    };

    fetchHomepage();
  }, []);

  return (
    <>
      <Title level={2} className="heading">Stocks stats</Title>
      <Container maxW={"container.xl"}>
        <div className="flex gap-2">
          <HStack spacing={4}>
            <Statistic title="Total stocks" value={816} />
          </HStack>
          <HStack spacing={4}>
            <Statistic title="Sensex" value={73876.65} />
          </HStack>
          <HStack spacing={4}>
            <Statistic title="Nifty 50" value={22434.5} />
          </HStack>
        </div>
        
      </Container>

      <div className="home-heading-container">
        <Title level={2} className="home-title" text-aling="centre">Top Stocks </Title>
        <Title level={3} className="show-more"><Link href="/Stocks">Show more</Link></Title>
      </div>
      <Storhome/>
      {/* <Stocks /> */}

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Stock News</Title>
        <Title level={3} className="show-more">

          <Link href="/" >Show more</Link>

        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;