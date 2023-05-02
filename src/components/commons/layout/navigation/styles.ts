import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
  }
`;

export const MenuTitle = styled.div`
  font-size: 18px;
  color: ${(props: IProps) => (props.isActive ? "#3a6625" : "#2f3438")};
`;
