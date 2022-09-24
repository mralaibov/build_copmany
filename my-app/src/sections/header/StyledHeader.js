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
      color: white;
      margin: 0 1em;
      padding: 0.618em 0;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      letter-spacing: .06em;
      img {
        max-width: 120px;
      }
    }
  }
`
