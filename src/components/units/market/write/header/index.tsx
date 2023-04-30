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
          defaultValue={props.data?.fetchUseditem.name}
          placeholder="상품 명을 입력하세요."
        ></input>
        <input
          {...props.register("price")}
          defaultValue={String(props.data?.fetchUseditem.price ?? "")}
          placeholder="상품 가격을 입력하세요."
        ></input>
        <input
          {...props.register("remarks")}
          defaultValue={props.data?.fetchUseditem.remarks}
          placeholder="상품 요약을 입력하세요."
        ></input>
        <input
          {...props.register("tags")}
          defaultValue={String(props.data?.fetchUseditem.tags ?? "")}
          placeholder="#을 기준으로 태그를 입력하세요."
        ></input>
      </D.ContentsWrapper>
    </D.Wrapper>
  );
}
