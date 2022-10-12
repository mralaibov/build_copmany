import styled from "styled-components";
import {theme} from "../../../theme";
import buildBanner from '../../../assets/buildBanner.jpeg'

export const StyledMainBanner = styled.div`
  width: 100%;
  min-height: calc(100vh - 149.5px);
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-style: normal;
    font-size: 115px;
    font-family: ${theme.font.primary};
    margin: 0 0 20px;
  }

  p {
    font-weight: 300;
    font-style: italic;
    font-size: 60px;
    font-family: ${theme.font.secondary};
    margin: 0 0 30px;
  }

  button {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    padding: 25px 46px;
    font-family: ${theme.font.primary};
    transition: .3s;
    opacity: 1;
    cursor: pointer;
    margin: 0 0 100px;
    border: none;
    letter-spacing: 1px;

    &:hover {
      opacity: 0.7;
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-image: url(${buildBanner});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 120%;
    z-index: -1;
    will-change: transform;
  }
`
