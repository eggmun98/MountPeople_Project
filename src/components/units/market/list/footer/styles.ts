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
  > div {
    padding: 10px 20px;
    > p {
      font-size: 12px;
    }
    > p:nth-of-type(2) {
      font-size: 14px;
    }
    > p:nth-of-type(3) {
      font-size: 14px;
    }
  }
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 5px;
`;

export const HiddenImg = styled.div`
  width: 100%;
  height: 80%;
  background-color: #d9d9d9d9;
  border-radius: 5px;
`;
