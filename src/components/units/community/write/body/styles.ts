import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const MapWrapper = styled.div`
  width: 30%;
  margin-right: 40px;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  > input {
    width: 10%;
    height: 40px;
    margin-right: 20px;
    padding: 0 12px;
    border: 1px solid #c7cbc6;
    border-radius: 5px;
    outline-color: #3a6625;
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  > button {
    width: 10%;
    height: 40px;
    padding: 0 12px;
    color: #fff;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: #3a6625;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 50%;
    }
  }
`;

export const InputWrapper01 = styled.div`
  width: 100%;
  margin-top: 20px;

  > input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #c7cbc6;
    border-radius: 5px;
    outline-color: #3a6625;
  }
`;
