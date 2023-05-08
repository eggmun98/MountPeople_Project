import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 24%;
  height: 300px;
  margin: 20px 0.1px;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1023px) {
    width: 32%;
    height: 250px;
  }

  @media (max-width: 767px) {
    width: 49%;
    height: 200px;
  }
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 1023px) {
    height: 225px;
  }

  @media (max-width: 767px) {
    height: 180px;
  }
`;

export const HiddenImg = styled.div`
  width: 100%;
  height: 270px;
  background-color: #d9d9d9d9;
  border-radius: 5px;
  @media (max-width: 1023px) {
    height: 225px;
  }

  @media (max-width: 767px) {
    height: 180px;
  }
`;

export const TextWrapper = styled.div`
  height: 30px;
  padding: 10px 0px;
  > p {
    font-size: 16px;
  }
  > p:nth-of-type(2) {
    font-size: 14px;
  }
`;
