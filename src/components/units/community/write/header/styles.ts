import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TextWrapper = styled.div`
  > h1 {
    font-size: 24px;
    color: #3a6625;
  }
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  > input {
    width: 49%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #c7cbc6;
    border-radius: 5px;
    outline-color: #3a6625;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0;
    > input {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

export const InputWrapper01 = styled.div`
  width: 100%;
  margin-top: 40px;

  > input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #c7cbc6;
    border-radius: 5px;
    outline-color: #3a6625;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  > textarea {
    width: 100%;
    height: 400px;
    padding: 12px;
    border: 1px solid #c7cbc6;
    border-radius: 5px;
    outline-color: #3a6625;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;
