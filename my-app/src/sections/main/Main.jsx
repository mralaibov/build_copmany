import React from 'react';
import {StyledMain} from "./StyledMain";
import Container from "../../ui-components/container/Container";
import MainInfo from "./main_info/MainInfo";
import Slider from "./slider_slick/Slider";
import ImgColab from "./img_colab/ImgColab";

const Main = () => {
    return (
      <StyledMain>

        <Container>

            <MainInfo/>
            <ImgColab/>
            <Slider/>

        </Container>

      </StyledMain>
    );
};

export default Main;

