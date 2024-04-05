"use clinet";
import React from 'react'

import TradingViewWidget from './TradingViewWidget';

function StockDetails() {
  return (
    <div className="App">
      <h1>My TradingView Widget</h1>
      <TradingViewWidget />
    </div>
  );
}


export default StockDetails;