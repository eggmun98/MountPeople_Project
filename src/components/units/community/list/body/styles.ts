import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #3a6625;
  border-bottom: 1px solid #3a6625;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  > h1 {
    font-size: 18px;
    font-weight: 500;
    color: #2f3438;
  }
  > h1:nth-child(2) {
    margin-right: 300px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  border-top: 1px solid #bdbdbd;
  color: #4f4f4f;
  :hover {
    color: #3a6625;
  }

  > p:nth-child(2) {
    margin-right: 300px;
  }
`;
