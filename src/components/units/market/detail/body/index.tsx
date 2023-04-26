import { ContentsWrapper, ImgWrapper, Wrapper } from "./styles";
import { IProps } from "./types";

export default function DetailBody(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <ImgWrapper>
        <div></div>
        <div></div>
        <div></div>
      </ImgWrapper>
      <ContentsWrapper>{props.data?.fetchUseditem.contents}</ContentsWrapper>
    </Wrapper>
  );
}
