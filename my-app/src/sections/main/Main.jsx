import React from 'react';
import {StyledMain} from "./StyledMain";
import Container from "../../ui-components/container/Container";
import MainInfo from "./main_info/MainInfo";
import MainForm from "./main_form/MainForm";
import Slider from "./slider_slick/Slider";
import MainBanner from "./main_banner/MainBanner";

const Main = () => {
    return (
      <StyledMain>

        <MainBanner/>

        <Container>

            <MainInfo/>

            <MainForm/>

            <Slider/>

        </Container>

      </StyledMain>
    );
};

export default Main;

