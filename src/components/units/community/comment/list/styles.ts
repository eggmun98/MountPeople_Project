import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #979797;
  margin-top: 40px;
  padding: 0 0 40px 0;
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
  > p:nth-child(2) {
    font-size: 12px;
    color: #979797;
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
  > button:nth-child(2) {
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
