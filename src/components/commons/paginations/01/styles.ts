import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const Button = styled.div`
  color: ${(props: IProps) => (props.isActive ? "#3a6625" : "black")};
  cursor: pointer;
`;
