import React from 'react';
import logo from './logo.svg';
import "./styles/tailwind.css";
import CoinMarketPrice from './component/coinmarket/display_coininfo';

function App() {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  return (
    <div className="App">
      <CoinMarketPrice />
    </div>
  );
}

export default App;
