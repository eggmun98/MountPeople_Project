import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 240px;
  @media (max-width: 1023px) {
    padding: 0 120px;
  }
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;
