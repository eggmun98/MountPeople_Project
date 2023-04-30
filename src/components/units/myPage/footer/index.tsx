import MyItem from "./myItem";
import { IProps } from "./types";

export default function MyPageFooter(props: IProps): JSX.Element {
  return (
    <>
      <MyItem data={props.data}></MyItem>
    </>
  );
}
