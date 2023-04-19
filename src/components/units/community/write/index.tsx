import WriteHeader from "./header";
import WriteFooter from "./footer";
import WriteBody from "./body";
import { UploadWrapper, Wrapper } from "./styles";
import Uploads01 from "../../../commons/uploads/01";

export default function CommunityWrite(): JSX.Element {
  return (
    <Wrapper>
      <WriteHeader></WriteHeader>
      <WriteBody></WriteBody>
      <UploadWrapper>
        {new Array(3).fill("").map((el, dex) => (
          <Uploads01 key={dex}></Uploads01>
        ))}
      </UploadWrapper>
      <WriteFooter></WriteFooter>
    </Wrapper>
  );
}
