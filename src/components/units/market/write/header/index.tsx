import { useRecoilState } from "recoil";
import * as D from "./styles";
import { IProps } from "./types";
import { imagesState02 } from "../../../../commons/stores";
import Uploads02 from "../../../../commons/uploads/02";

export default function WriteHeader(props: IProps): JSX.Element {
  const [imageUrls, setImageUrls] = useRecoilState(imagesState02);

  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        <D.ImgWrapper>
          <Uploads02
            el={imageUrls[0]}
            index={0}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
          ></Uploads02>
        </D.ImgWrapper>
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
