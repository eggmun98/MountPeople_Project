import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 70px;
  background-image: url("/community/list/banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;

  > h1:first-of-type {
    text-align: center;
    font-size: 50px;
    font-family: "suite0101";
    font-weight: 400;
    color: white;
  }
  > h1:last-of-type {
    text-align: center;
    font-size: 50px;
    font-family: "mont01";
    font-weight: 600;
    color: white;
  }
`;
