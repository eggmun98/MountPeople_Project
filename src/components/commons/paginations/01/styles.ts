import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const Button = styled.div`
  color: ${(props: IProps) => (props.isActive ? "red" : "black")};
  cursor: pointer;
`;
