import { useQuery } from "@apollo/client";
import MyPageBody from "./body";
import MyPageFooter from "./footer";
import MyPageHeader from "./header";
import { Wrapper } from "./styles";
import { FETCH_USER_LOGGED_IN } from "../../commons/hooks/query/useQueryFetchUsedLoggedIn";
import { IQuery } from "../../../commons/types/generated/types";
import { useAuth } from "../../commons/hooks/customs/useAuth";
import { useState } from "react";

export default function MyPageUI(): JSX.Element {
  useAuth();
  const [save, setSave] = useState("item");
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onClickSave = (save: string) => () => {
    setSave(save);
  };

  return (
    <Wrapper>
      <MyPageHeader onClickSave={onClickSave} save={save}></MyPageHeader>
      <MyPageBody data={data}></MyPageBody>
      <MyPageFooter data={data} save={save}></MyPageFooter>
    </Wrapper>
  );
}
