import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: absolute;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
    > video {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const ScrollAnimation = keyframes`
  0% {
   bottom: -2.2rem;
  }
  100% {
   bottom: -4rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Btn = styled.button`
  padding: 20px 50px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  border: none;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 5px;
  cursor: pointer;
`;

export const ScrollBox = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const ScrollText = styled.p`
  font-size: 18px;
  color: white;
`;

export const ScrollIcon = styled.img`
  width: 3.7rem;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${ScrollAnimation} 0.9s 1s infinite linear;
`;
