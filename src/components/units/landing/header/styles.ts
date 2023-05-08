import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 999;

  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 120px;
    @media (max-width: 1023px) {
      margin: 0 60px;
    }
    @media (max-width: 767px) {
      margin: 0 10px;
    }
  }
`;
export const LogoWrapper = styled.div`
  width: 150px;
  height: 70px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 70px;
  object-fit: cover;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > p {
    color: #fff;
    margin-right: 15px;
    user-select: none;
  }

  > button {
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid #3a6625;
    border-radius: 50px;
    z-index: 1000;
    color: #3a6625;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: #3a6625;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const LogoutBtn = styled.div`
  color: #fff;
  background-color: transparent;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  :hover {
    color: #3a6625;
  }
`;
