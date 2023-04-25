import * as D from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

export default function DetailHeader(): JSX.Element {
  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        <D.ImgWrapper></D.ImgWrapper>
      </D.MainImgWrapper>
      <D.ContentsWrapper>
        <D.TitleWrapper>
          <h1>등산스틱 팝니다~</h1>
          <p>문성진</p>
        </D.TitleWrapper>
        <D.PriceWrapper>
          <p>445,000원</p>
          <p>2023.04.25</p>
        </D.PriceWrapper>
        <D.RemarksWrapper>
          <p>세계 최고의 명품스틱</p>
          <D.Heart></D.Heart>
        </D.RemarksWrapper>
        <D.TagWrapper>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
          <div>추억</div>
        </D.TagWrapper>
      </D.ContentsWrapper>
    </D.Wrapper>
  );
}
