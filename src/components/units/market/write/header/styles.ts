import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #979797;
  @media (max-width: 767px) {
    flex-direction: column;
    height: 460px;
    /* border: none; */
  }
`;

export const MainImgWrapper = styled.div`
  width: 50%;
  height: 300px;
  padding: 30px;

  @media (max-width: 767px) {
    width: 100%;
    border-bottom: 1px solid #979797;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #979797;
  @media (max-width: 767px) {
    border: none;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 30px 0px;
  > input {
    height: 25%;
    margin-bottom: 20px;
    padding: 0 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    outline-color: #3a6625;
  }
  > input:last-of-type {
    margin-bottom: 0px;
  }
  @media (max-width: 767px) {
    width: 100%;

    > input {
      height: 15%;
    }
  }
`;
