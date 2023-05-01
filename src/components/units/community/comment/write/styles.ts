import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0 0 0;
  border-top: 1px solid #979797;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  > input {
    width: 20%;
    height: 30px;
    margin-right: 12px;
    padding: 0 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    outline-color: #3a6625;

    @media (max-width: 1023px) {
      width: 25%;
    }
    @media (max-width: 767px) {
      width: 20%;
    }
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  > input {
    width: 90%;
    height: 70px;
    margin-right: 6px;
    padding: 0 12px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    outline-color: #3a6625;
  }

  > button {
    width: 10%;
    height: 70px;
    padding: 0 12px;
    color: #3a6625;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 1023px) {
    > input {
      width: 80%;
    }
    > button {
      width: 20%;
    }
  }

  @media (max-width: 767px) {
    > input {
      width: 75%;
    }
    > button {
      width: 25%;
    }
  }
`;
