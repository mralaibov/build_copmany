import React from 'react';
import {StyledCustomInput} from "./StyledCustomInput";

const CustomInput = ({name, value, setValue, error}) => {
  return (
    <StyledCustomInput className={`form__${value}`} error={error}>
      <h5>{name}</h5>
      <input type="text" name={name} value={value} onChange={(e) => setValue(e.target.value)}/>
      <p className="red">{error}</p>
    </StyledCustomInput>
  );
};

export default CustomInput;
