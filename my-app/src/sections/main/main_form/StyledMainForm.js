import styled from 'styled-components';

export const StyledMainForm = styled.div`
  color: #222;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  label {
    width: 48%;
    &:nth-child(2n) {
      margin-left: 4%;
    }
  }
`;
