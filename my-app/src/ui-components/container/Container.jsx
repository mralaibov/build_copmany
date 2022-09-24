import React from 'react';
import {StyledContainer} from "./StyledContainer";

const Container = ({children}) => {
  return (
    <StyledContainer className="container">
      {children}
    </StyledContainer>
  );
};

export default Container;
