import styled from "styled-components";

export const StyledHeader =  styled.header`
  .Header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: ${({isBlackText}) => isBlackText ? "black" : "white"};
      padding: 10px;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      letter-spacing: .06em;
      display: inline-block;
      background-color: rgba(255, 255, 255, 0);
      transition: .3s;
      img {
        max-width: 120px;
      }

      &:hover {
        ${({isBlackText}) => isBlackText ? "background-color: rgb(247 247 247 / 90%)" : ""};
      }
    }
  }
`
