import * as D from "./styles";
import { IProps } from "./types";

export default function DetailHeader(props: IProps): JSX.Element {
  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        {props.data?.fetchUseditem.images ? (
          <D.ImgWrapper
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          ></D.ImgWrapper>
        ) : (
          <D.HiddenWrapper></D.HiddenWrapper>
        )}
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
