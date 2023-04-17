import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #3a6625;
  border-bottom: 1px solid #3a6625;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  border-top: 1px solid #bdbdbd;
  color: #4f4f4f;
  :hover {
    color: #3a6625;
  }

  > p:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 5%;
  }
  > p:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 75%;
  }
  > p:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 10%;
  }
  > p:nth-child(4) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15%;
  }
`;
