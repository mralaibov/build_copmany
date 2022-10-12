import React from 'react';
import {StyledInfoBlock} from "./StyledInfoBlock";

const InfoBlock = ({title, content, href}) => {
  return (
    <StyledInfoBlock>
      <h2>{title}</h2>
      {content}
      <div className='center'>
        <a href={href ? href : '#'}>Learn more</a>
      </div>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
