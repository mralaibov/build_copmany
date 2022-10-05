import styled from 'styled-components';

export const StyledMainForm = styled.div`
  color: #222;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  background-color: #fff;
  label {
    width: 48%;
    &:nth-child(2n) {
      margin-left: 4%;
    }
  }
`;
