import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding: 30px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  color: #292929;

  @media (max-width: 767px) {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #c5c5c5;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: red;  */
  width: 200px;
  > div {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: #979797;
  }
  > button {
    width: 100px;
    padding: 5px;
    border: 1px solid #3a6625;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      color: #fff;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    > p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    > p:nth-of-type(2) {
      font-size: 14px;
    }
    > p:nth-of-type(3) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      margin-left: 10px;
    }
  }

  > button {
    width: 100px;
    padding: 5px;
    border: 1px solid #3a6625;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      color: #fff;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  > p {
    font-size: 14px;
    color: #979797;
    cursor: pointer;
    user-select: none;
    :hover {
      color: #3a6625;
    }
  }
`;
