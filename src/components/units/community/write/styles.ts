import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 40px 120px;
  padding: 40px 60px;
  border: 1px solid #3a6625;
  border-radius: 5px;

  @media (max-width: 1023px) {
    margin: 30px 90px;
    padding: 30px 45px;
  }

  @media (max-width: 767px) {
    margin: 0px;
    padding: 10px 20px;
    border: none;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
