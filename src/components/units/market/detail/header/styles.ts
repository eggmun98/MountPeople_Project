import styled from "@emotion/styled";
import { AiFillHeart } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #979797;
`;

export const MainImgWrapper = styled.div`
  width: 50%;
  height: 300px;
  padding: 30px;
`;

export const ImgWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #979797;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 20%;
  border-bottom: 1px solid #979797;

  > h1 {
    font-size: 18px;
  }

  > p {
    font-size: 14px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  height: 20%;

  border-bottom: 1px solid #979797;

  > p {
    font-size: 14px;
  }
  > p:last-of-type {
    font-size: 12px;
    color: #979797;
  }
`;

export const RemarksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  height: 20%;

  border-bottom: 1px solid #979797;

  > p {
    font-size: 14px;
  }
`;

export const Heart = styled(AiFillHeart)`
  font-size: 30px;
  color: #3a6625;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 40%;
  padding: 10px 0px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    margin-right: 20px;
    font-size: 12px;
    border-radius: 50px;
    color: #fff;
    background-color: #3a6625;
  }
`;
