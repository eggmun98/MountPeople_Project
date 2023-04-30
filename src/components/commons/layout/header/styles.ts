import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 80px;

  border-bottom: 1px solid #c5c5c5;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 120px;
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

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
`;

export const MenuTitle = styled.div`
  font-size: 24px;
  color: ${(props: IProps) => (props.isActive ? "#3a6625" : "#2f3438")};
  :hover {
    color: #3a6625;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > button {
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #3a6625;
    border-radius: 50px;
    background-color: white;
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
