import * as D from "./styles";
import { IProps } from "./types";

export default function DetailHeader(props: IProps): JSX.Element {
  console.log("마켓 디테일 데이터", props.data?.fetchUseditem?.tags);
  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        <D.ImgWrapper></D.ImgWrapper>
      </D.MainImgWrapper>
      <D.ContentsWrapper>
        <D.TitleWrapper>
          <h1>{props.data?.fetchUseditem.name}</h1>
          <p>{props.data?.fetchUseditem.seller?.name}</p>
        </D.TitleWrapper>
        <D.PriceWrapper>
          <p>{props.data?.fetchUseditem.price}</p>
          <p>{props.data?.fetchUseditem.createdAt}</p>
        </D.PriceWrapper>
        <D.RemarksWrapper>
          <p>{props.data?.fetchUseditem.remarks}</p>
          <D.Heart></D.Heart>
        </D.RemarksWrapper>
        <D.TagWrapper>
          {props.data?.fetchUseditem?.tags
            ?.filter((el) => el !== "")
            .map((el) => (
              <div key={el}>{el}</div>
            ))}
        </D.TagWrapper>
      </D.ContentsWrapper>
    </D.Wrapper>
  );
}
