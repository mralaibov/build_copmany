import React from 'react';
import {StyledFooter} from "./StyledFooter";
import Container from "../../ui-components/container/Container";

const Footer = () => {
  return (

    <StyledFooter>

      <Container>

        <div className="footer__top">
          <div className="blue">Buffalo Core Supply</div>
          <div>42 Selkirk Street,</div>
          <div>Buffalo, NY, 14210,</div>
          <div>United States</div>
          <a href="tel:716-342-2079">716-342-2079 </a>
          <a
            href="mailto:info@buffalocoresupply.com">info@buffalocoresupply.com</a>
        </div>

        <div className="footer__bottom">
          <div>Hours</div>
          <div>Mon 7:30am-4pm</div>
          <div>Tue 7:30am-4pm</div>
          <div>Wed 7:30am-4pm</div>
          <div>Thu 7:30am-4pm</div>
          <div>Fri 7:30am-4pm</div>
        </div>

      </Container>

    </StyledFooter>
  );
};

export default Footer;
