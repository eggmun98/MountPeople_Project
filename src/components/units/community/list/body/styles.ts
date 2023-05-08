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
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  border-top: 1px solid #bdbdbd;
  color: #4f4f4f;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 10px;
  }
  > p {
    font-weight: 700;
  }

  > p:nth-of-type(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 5%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 20%;
      font-size: 14px;
    }
  }
  > p:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 75%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 80%;
      font-size: 14px;
    }
  }
  > p:nth-of-type(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 20%;
      font-size: 12px;
      color: #979797;
    }
  }
  > p:nth-of-type(4) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 10%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 80%;
      font-size: 8px;
      color: #979797;
    }
  }
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
  cursor: pointer;
  user-select: none;
  :hover {
    color: #3a6625;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 10px;
  }

  > p:nth-of-type(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 5%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 20%;
      font-size: 14px;
    }
  }
  > p:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 75%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 80%;
      font-size: 14px;
    }
  }
  > p:nth-of-type(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 20%;
      font-size: 12px;
      color: #979797;
    }
  }
  > p:nth-of-type(4) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 10%;
    @media (max-width: 767px) {
      justify-content: flex-start;
      width: 80%;
      font-size: 8px;
      color: #979797;
    }
  }
`;
