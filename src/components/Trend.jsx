"use client";
import React from 'react'

import TradingViewWidget from './TradingViewWidget';
import { Typography } from 'antd';

const { Title } = Typography;

function Trend() {
  return (
    <div className="App h-96">
      
      <Title  level={2} className="heading">STOCKS TRENDS</Title>
      <TradingViewWidget />
      <style jsx>{`
        .full-page {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </div>
  );
}
export default Trend;