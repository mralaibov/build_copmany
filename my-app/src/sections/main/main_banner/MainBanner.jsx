import React, {useState} from 'react';
import {StyledMainBanner} from "./StyledMainBanner";

const MainBanner = () => {

  const [backgroundPos, setBackgroundPos] = useState(100);

  window.addEventListener(
    'scroll',
    () => window.pageYOffset / window.innerHeight <= 1
      && setBackgroundPos(window.pageYOffset / window.innerHeight * 20)
  );

    return (
        <StyledMainBanner>
            <h1>Buffalo Core Supply</h1>
            <p>A Third Generation Core Supplier</p>
            <button>BUY OR SELL CORES</button>
            <div className="bg" style={{transform: `translateY(${backgroundPos}%)`}}></div>
        </StyledMainBanner>
    );
};

export default MainBanner;
