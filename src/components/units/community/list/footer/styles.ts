import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  > button {
    font-size: 12px;
    padding: 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: white;
    color: #3a6625;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;
