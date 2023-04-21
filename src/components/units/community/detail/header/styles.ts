import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #979797;
  > h1 {
    font-size: 24px;
  }
  > p {
    font-size: 14px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
  > div {
    width: 90%;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 10%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 40px;
  padding: 0 20%;
  overflow: hidden;

  > div {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
  }
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
