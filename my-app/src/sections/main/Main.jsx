import React from 'react';
import {StyledMain} from "./StyledMain";
import Container from "../../ui-components/container/Container";
import MainForm from "./main_form/MainForm";
import Slider from "./slider_slick/Slider";
import ImgColab from "./img_colab/ImgColab";
import MainBanner from "./main_banner/MainBanner";
import InfoBlock from "../../ui-components/infoBlock/InfoBlock";

const Main = () => {
    return (
      <StyledMain>

        <MainBanner/>

        <Container mainPage>

            <InfoBlock
              title={'A Full-Line Automotive Core Supplier Since 1945'}
              content={<>
                  <p> Buffalo Core Supply is a 3rd generation full-line automotive core
                      supplier and core buyer. Our primary warehouse is located in Buffalo,
                      New York.</p>

                  <p> When Knopf Automotive sold in 2014, the company had locations in nine
                      states. We were the largest automotive core suppliers and core sellers
                      in the world. Knopf processed over 10,000,000 recovered automotive parts
                      annually and handled over 30 automotive core product lines. And our
                      operations took place in over 1 million square feet of modern warehouse
                      space.</p>
                  <p> In 2019, Knopf reentered the business under the name Buffalo Core
                      Supply with a flagship warehouse located in Buffalo, New York. We have a
                      team of automotive industry leaders to provide convenient, personalized
                      service to the automotive core aftermarket industry. Our company’s
                      lifelong relationships have allowed us to grow rapidly. We're proud to
                      be one of the automotive aftermarket's top core suppliers and core
                      buyers.</p>
                  <p> Today, Buffalo Core Supply is partnered with the largest automotive
                      remanufacturers and core exporters throughout the globe.</p>
              </>}
              href={'#'}
            />

            <ImgColab/>

            <MainForm/>

            <Slider/>

        </Container>

      </StyledMain>
    );
};

export default Main;

