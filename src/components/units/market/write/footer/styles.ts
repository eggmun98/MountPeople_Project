import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0;

  > button {
    width: 10%;
    height: 40px;
    padding: 0 12px;
    color: #3a6625;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;
