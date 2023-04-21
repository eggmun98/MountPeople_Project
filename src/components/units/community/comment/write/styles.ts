import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  > input {
    width: 90%;
    height: 70px;
    margin-right: 6px;
    padding: 0 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    outline-color: #3a6625;
  }

  > button {
    width: 10%;
    height: 70px;
    padding: 0 12px;
    color: #3a6625;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }
`;
