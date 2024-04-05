"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ stocks }) => {
  // Extracting price and date data from the stocks array
  const prices = stocks.map((stock) => stock.price); // Assuming 'price' is the key for the stock prices
  const dates = stocks.map((stock) => stock.date); // Assuming 'date' is the key for the stock dates

  // Chart data
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Stock Prices',
        data: prices,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;