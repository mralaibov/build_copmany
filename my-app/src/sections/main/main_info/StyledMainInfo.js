import styled from "styled-components";

export const StyledMainInfo = styled.div`
  .sec_info {
    color: white;
    padding: 90px 50px;
    
    h2 {
      text-align: center;
      white-space: pre-wrap;
      font-size: 40px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0;
      line-height: 1.1em;
      text-transform: none;
      margin-bottom: 50px;
      margin-top: 0;
      color: #222;
    }
    p {
      font-size: 16px;
      margin-top: 10px;
      color: #222;
      letter-spacing: 0;
      line-height: 1.8em;
      font-weight: 400;
    }
    .center {
      text-align: center;
      margin-top: 45px;
      a {
        
        border: 2px solid black;
        font-style: normal;
        letter-spacing: .1em;
        padding: 13px 26px;
        font-size: 13px;
        text-transform: uppercase;
        text-decoration: none;
        color: black;
        font-weight: 700;
        transition: .2s;
        &:hover{
          background: black;
          color: white;
        }
      }
    }
  }
`
