import { ContentsWrapper, ImgWrapper, Wrapper } from "./styles";
import { IProps } from "./types";
import Dompurify from "dompurify";

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
      {typeof window !== "undefined" && (
        <ContentsWrapper
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(
              String(props.data?.fetchUseditem?.contents)
            ),
          }}
        ></ContentsWrapper>
      )}
    </Wrapper>
  );
}
