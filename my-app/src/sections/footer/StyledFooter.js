import styled from "styled-components";
import {theme} from "../../theme";

export const StyledFooter =  styled.footer`
  background-color: #0d0d0d;
  padding-top: 120px;
  padding-bottom: 214px;
  color: white;
  font-family: ${theme.font.secondary};
  
  .footer__top, .footer__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
  .blue {
    color: #52c2c8;
  }
  .gray {
    color: #a6a6a6;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
