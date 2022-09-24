import React from 'react';
import {StyledMain} from "./StyledMain";
import Container from "../../ui-components/container/Container";
import MainInfo from "./main_info/MainInfo";

const Main = () => {
    return (
      <StyledMain>

        <Container>

            <MainInfo/>

        </Container>

      </StyledMain>
    );
};

export default Main;

