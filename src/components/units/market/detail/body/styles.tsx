import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  padding: 3% 25%;
  > img {
    width: 100%;
    height: 300px;
    margin-top: 40px;
    object-fit: cover;
  }

  @media (max-width: 1023px) {
    padding: 2.5% 20%;
  }

  @media (max-width: 767px) {
    padding: 2% 5%;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 30px 100px;

  @media (max-width: 767px) {
    padding: 2% 5%;
  }
`;
