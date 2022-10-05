import React from 'react';
import {StyledContainer} from "./StyledContainer";

const Container = ({mainPage, children}) => {
  return (
    <StyledContainer className={`container ${mainPage && 'mainPage'}` }>
      {children}
    </StyledContainer>
  );
};

export default Container;
