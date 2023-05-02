import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  @media (max-width: 1023px) {
    padding-left: 40px;
  }
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;
