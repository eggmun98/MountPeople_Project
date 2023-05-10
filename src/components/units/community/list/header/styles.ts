import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 70px;
  background-image: url("/community/list/banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;

  > h1 {
    text-align: center;
    font-size: 50px;
    font-family: "suite01";
    font-weight: 400;
    color: white;
  }
`;
