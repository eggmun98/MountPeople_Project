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
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    :hover {
      background-color: #3a6625;
      color: #fff;
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 23%;
  height: 300px;
  margin: 20px 0.1px;

  @media (max-width: 1023px) {
    width: 30%;
    height: 250px;
  }

  @media (max-width: 767px) {
    width: 45%;
    height: 200px;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 200px;
  }
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
