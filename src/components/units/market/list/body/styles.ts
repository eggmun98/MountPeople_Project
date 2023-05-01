import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px 0 40px 0;
  border-top: 1px solid #979797;
  border-bottom: 1px solid #979797;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  > h1 {
    text-align: center;
    font-size: 18px;
    color: #3a6625;
  }

  > button {
    padding: 6px;
    color: #292929;
    border: 1px solid #3a6625;
    background-color: #fff;
    :hover {
      color: #3a6625;
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    > div:last-of-type {
      display: none;
    }
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    > div:last-of-type {
      display: flex;
    }
  }
`;

export const ProductWrapper = styled.div`
  width: 24%;
  height: 300px;
  border-radius: 5px;
  background-color: #d9d9d9;

  @media (max-width: 1023px) {
    width: 32%;
    height: 250px;
    margin: 20px 0.1px;
  }

  @media (max-width: 767px) {
    width: 49%;
    height: 200px;
    margin: 20px 0.1px;
  }
`;
