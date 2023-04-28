import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px 300px;
  border-bottom: 1px solid #979797;
  > h1 {
    font-size: 20px;
    color: 292929;
    :hover {
      color: #3a6625;
    }
  }
`;
