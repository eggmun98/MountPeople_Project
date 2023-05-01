import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #979797;
  margin-top: 40px;
  padding: 0 0 40px 0;

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  > p {
    margin-right: 10px;
    font-size: 16px;
  }
  > p:nth-of-type(2) {
    font-size: 12px;
    color: #979797;
  }
  > input {
    width: 100px;
    height: 25px;
    margin-right: 12px;
    padding: 0 12px;
    font-size: 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    outline-color: #3a6625;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 25px;
    margin-right: 12px;
    padding: 0 12px;
    font-size: 12px;
    border: 1px solid #979797;
    border-radius: 5px;
    background-color: #d9d9d9;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > button {
    border: none;
    color: #979797;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      color: #3a6625;
    }
  }
  > button:nth-of-type(2) {
    margin-left: 10px;
    border: none;
    color: #979797;
    background-color: #fff;
    cursor: pointer;
    user-select: none;

    :hover {
      color: #3a6625;
    }
  }
`;

export const BottomWrapper = styled.div`
  font-size: 14px;
`;

export const Input01 = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  border: 1px solid #3a6625;
  border-radius: 5px;
  outline-color: #3a6625;
`;
