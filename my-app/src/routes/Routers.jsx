import React from 'react';
import Main from "../sections/main/Main";
import {Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      {/*<Route path="/about" element={<About/>}/>*/}
      {/*<Route path="/buy-or-sell-cores" element={<BuyOrSellCores/>}/>*/}
      {/*<Route path="/buy-guide" element={<ProductLines/>}/>*/}
      {/*<Route path="/buffalocoresupplyteam" element={<Team/>}/>*/}
      {/*<Route path="/sidehustle" element={<SideHustleOpportunity />}/>*/}
      {/*<Route path="/blog" element={<Blog/>}/>*/}
      {/*<Route path="/faq" element={<FAQ/>}/>*/}
      {/*<Route path="/contact" element={<Contact/>}/>*/}
    </Routes>
  );
};

export default Routers;
