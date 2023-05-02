import { ContentsWrapper, ImgWrapper, Wrapper } from "./styles";
import { IProps } from "./types";

export default function DetailBody(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <ImgWrapper>
        {props.data?.fetchUseditem?.images
          ?.filter((el) => el !== "")
          .map((el) => (
            <img src={`https://storage.googleapis.com/${el}`} key={el}></img>
          ))}
      </ImgWrapper>
      <ContentsWrapper>{props.data?.fetchUseditem.contents}</ContentsWrapper>
    </Wrapper>
  );
}
