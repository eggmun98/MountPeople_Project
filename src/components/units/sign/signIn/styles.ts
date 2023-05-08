import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export const InWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto 0px;
  padding: 30px 70px 60px 70px;
  border: 4px solid #3a6625;
  border-radius: 5px;
  background-color: #fff;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > input {
      width: 100%;
      height: 40px;
      margin-top: 35px;
      padding: 0 12px;
      border: 2px solid #3a6625;
      border-radius: 5px;
      outline-color: #3a6625;

      @media (max-width: 767px) {
        margin-top: 15px;
      }
    }
    > div {
      margin-top: 5px;
      height: 5px;
      > p {
        font-size: 8px;
        color: red;
      }
    }
    > p:last-of-type {
      margin-top: 20px;
      font-size: 12px;
      border-bottom: 1px solid #c5c5c5;
      color: #979797;
      cursor: pointer;
      user-select: none;
      :hover {
        color: #3a6625;
      }
    }

    > button {
      width: 100px;
      height: 40px;
      margin-top: 20px;
      border: 1px solid #3a6625;
      border-radius: 5px;
      color: #fff;
      background-color: #3a6625;
      cursor: pointer;
      user-select: none;
    }
  }

  @media (max-width: 767px) {
    width: 400px;
    padding: 20px 45px 30px 45px;
  }

  @media (max-width: 500px) {
    width: 300px;
    padding: 10px 30px 20px 30px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;
  user-select: none;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  > img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;

export const TitleWrapper = styled.div`
  width: 70%;
  > h1 {
    color: #3a6625;
    @media (max-width: 767px) {
      font-size: 28px;
    }
    @media (max-width: 500px) {
      font-size: 22px;
    }
  }
`;
