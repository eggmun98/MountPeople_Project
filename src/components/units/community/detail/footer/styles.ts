import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #3a6625;

  > button {
    width: 100px;
    font-size: 12px;
    margin-right: 20px;
    padding: 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: white;
    color: #3a6625;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
