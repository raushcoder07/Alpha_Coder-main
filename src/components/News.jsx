"use client";

import { HStack, Spinner } from "@chakra-ui/react";
import { Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Typography from 'antd/es/typography/Typography';
// import { HStack, Spinner } from '@chakra-ui/react';

const { Title } = Typography;

const options = {
  method: 'GET',
  url: 'https://real-time-finance-data.p.rapidapi.com/stock-news',
  params: {
    symbol: 'AAPL:NASDAQ',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log("Response:", response);
        const responseData = response.data;
        if (responseData && responseData.data && responseData.data.news) {
          const newsArray = Object.values(responseData.data.news);
          setNews(newsArray);
        } else {
          console.error("Invalid response format:", response);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Title level={2} className="news" >News </Title>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <HStack wrap={"wrap"} spacing={4}>
          { Array.isArray(news) && news.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '300px', marginBottom: '20px' }}>
              <h3>{item.article_title}</h3>
              <p><strong>Source:</strong> {item.source}</p>
              <p><strong>Post Time (UTC):</strong> {item.post_time_utc}</p>
              <a href={item.article_url} target="_blank" rel="noopener noreferrer">Read more</a>
              <div>
                <img src={item.article_photo_url} alt="Article" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
              </div>
            </div>
          ))}
        </HStack>
      )}
    </div>
  );
};

export default News;