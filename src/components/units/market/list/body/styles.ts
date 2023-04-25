import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px 0 40px 0;
  border-top: 1px solid #979797;
  border-bottom: 1px solid #979797;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  > h1 {
    font-size: 18px;
    color: #3a6625;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductWrapper = styled.div`
  width: 24%;
  height: 300px;
  border-radius: 5px;
  background-color: #d9d9d9;
`;
