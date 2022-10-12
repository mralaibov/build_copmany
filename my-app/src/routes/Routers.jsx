import React from 'react';
import Main from "../sections/main/Main";
import {Routes, Route} from "react-router-dom";
import {StyledRoutes} from "./StyledRoutes";
import InfoBlock from "../ui-components/infoBlock/InfoBlock";

const Routers = () => {
  return (
    <StyledRoutes>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={
          <InfoBlock
            title={'About us'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/buy-or-sell-cores" element={
          <InfoBlock
            title={'Buy'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/buy-guide" element={
          <InfoBlock
            title={'Buy guide'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/buffalocoresupplyteam" element={
          <InfoBlock
            title={'Team'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/sidehustle" element={
          <InfoBlock
            title={'Side hustle'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/blog" element={
          <InfoBlock
            title={'Blog'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/faq" element={
          <InfoBlock
            title={'FAQ'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        <Route path="/contact" element={
          <InfoBlock
            title={'Contact'}
            content={<>
              <p> Buffalo Core Supply is a 3rd generation full-line automotive
                core
                supplier and core buyer. Our primary warehouse is located in
                Buffalo,
                New York.</p>
            </>}
            href={'#'}
          />}/>
        {/*<Route path="/about" element={<About/>}/>*/}
        {/*<Route path="/buy-or-sell-cores" element={<BuyOrSellCores/>}/>*/}
        {/*<Route path="/buy-guide" element={<ProductLines/>}/>*/}
        {/*<Route path="/buffalocoresupplyteam" element={<Team/>}/>*/}
        {/*<Route path="/sidehustle" element={<SideHustleOpportunity />}/>*/}
        {/*<Route path="/blog" element={<Blog/>}/>*/}
        {/*<Route path="/faq" element={<FAQ/>}/>*/}
        {/*<Route path="/contact" element={<Contact/>}/>*/}
      </Routes>
    </StyledRoutes>
  );
}
;

export default Routers;
