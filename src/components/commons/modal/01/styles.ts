import styled from "@emotion/styled";
import { BiX } from "react-icons/bi";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Wrapper = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 60px 60px 30px 60px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  margin-top: -278.5px;
  margin-left: -200px;
  z-index: 999;

  @media (max-width: 767px) {
    margin-top: -138.2px;
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  > button {
    padding: 10px 20px;
    border: 1px solid #3a6625;
    border-radius: 5px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    :hover {
      background-color: #3a6625;
      color: #fff;
    }
  }
`;

export const Close = styled(BiX)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  color: #979797;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #3a6625;
  }
`;
