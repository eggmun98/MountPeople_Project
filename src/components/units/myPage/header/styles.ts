import styled from "@emotion/styled";

interface IProps {
  save: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 40px 0px;
  border-bottom: 1px solid #c5c5c5;

  @media (max-width: 1023px) {
    padding: 20px 0px;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    padding: 20px 10px;
    border-top: 1px solid #c5c5c5;
    border-bottom: none;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  color: ${(props: IProps) => (props.save ? "#3a6625" : "#292929")};
  cursor: pointer;
  user-select: none;
  :hover {
    color: #3a6625;
  }

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
