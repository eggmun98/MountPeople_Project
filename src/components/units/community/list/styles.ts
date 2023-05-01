import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 120px;

  @media (max-width: 1023px) {
    padding: 0 60px;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;
