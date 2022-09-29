import React from 'react';
import {StyledMain} from "./StyledMain";
import Container from "../../ui-components/container/Container";
import MainInfo from "./main_info/MainInfo";
import Slider from "./slider_slick/Slider";

const Main = () => {
    return (
      <StyledMain>

        <Container>

            <MainInfo/>
            <Slider/>

        </Container>

      </StyledMain>
    );
};

export default Main;

