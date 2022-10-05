import styled from 'styled-components';
import {theme} from "../../theme";

export const StyledCustomInput = styled.label`
  width: 100%;
  h5 {
    font-weight: 300;
    font-size: 16px;
    font-family: ${theme.font.secondary};
    margin: 0 0 12px;
    text-transform: capitalize;
  }
  input {
    width: 100%;
    padding: 12px;
    margin: 6px 0 24px ;
    border: 1px solid ${ ({error}) => error ? 'red' :'#ccc'};
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .red {
    color: red;
  }
  
`
