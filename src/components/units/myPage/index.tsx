import { useQuery } from "@apollo/client";
import MyPageBody from "./body";
import MyPageFooter from "./footer";
import MyPageHeader from "./header";
import { Wrapper } from "./styles";
import { FETCH_USER_LOGGED_IN } from "../../commons/hooks/query/useQueryFetchUsedLoggedIn";
import { IQuery } from "../../../commons/types/generated/types";

export default function MyPageUI(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <Wrapper>
      <MyPageHeader></MyPageHeader>
      <MyPageBody data={data}></MyPageBody>
      <MyPageFooter data={data}></MyPageFooter>
    </Wrapper>
  );
}
