import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 10%;
  padding: 30px 70px 60px 70px;
  border: 4px solid #3a6625;
  border-radius: 5px;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > input {
      width: 100%;
      height: 40px;
      margin-top: 40px;
      padding: 0 12px;
      border: 2px solid #3a6625;
      border-radius: 5px;
      outline-color: #3a6625;
    }

    > button {
      width: 100px;
      height: 40px;
      margin-top: 40px;
      border: 1px solid #3a6625;
      border-radius: 5px;
      color: #fff;
      background-color: #3a6625;
    }
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  > img {
    width: 100%;
    height: 50px;
    object-fit: contain;
  }
`;

export const TitleWrapper = styled.div`
  width: 70%;
  > h1 {
    color: #3a6625;
  }
`;
