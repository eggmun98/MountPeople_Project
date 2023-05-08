import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #979797;
  > h1 {
    font-size: 24px;
  }
  > p {
    font-size: 14px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  > p {
    width: 90%;
  }
  > p:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 10%;
    font-size: 12px;
    color: #979797;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 40px;
  padding: 0 20%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1023px) {
    height: 250px;
    padding: 0 10%;
  }

  @media (max-width: 767px) {
    height: 200px;
    padding: 0 5%;
  }
`;

export const YoutubeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 40px;
  padding: 0 20%;
  overflow: hidden;

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const Youtube = styled(ReactPlayer)`
  width: 100%;
  height: 300px;

  @media (max-width: 1023px) {
    height: 250px;
    padding: 0 10%;
  }

  @media (max-width: 767px) {
    height: 200px;
    padding: 0 5%;
  }
`;
