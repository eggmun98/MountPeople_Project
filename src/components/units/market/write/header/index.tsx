import * as D from "./styles";
import { IProps } from "./types";

export default function WriteHeader(props: IProps): JSX.Element {
  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        <D.ImgWrapper></D.ImgWrapper>
      </D.MainImgWrapper>
      <D.ContentsWrapper>
        <input
          {...props.register("name")}
          placeholder="상품 명을 입력하세요."
        ></input>
        <input
          {...props.register("price")}
          placeholder="상품 가격을 입력하세요."
        ></input>
        <input
          {...props.register("remarks")}
          placeholder="상품 요약을 입력하세요."
        ></input>
        <input
          {...props.register("tags")}
          placeholder="#을 기준으로 태그를 입력하세요."
        ></input>
      </D.ContentsWrapper>
    </D.Wrapper>
  );
}
