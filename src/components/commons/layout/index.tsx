import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { movePageMode } from "../hooks/customs/movePageMode";
import { useAllPageLink } from "../hooks/customs/allPageLink";
import Modal01 from "../modal/01";
import { isModalState, isModalState02 } from "../stores";
import { useRecoilState } from "recoil";
import Modal02 from "../modal/02";
import { useState } from "react";
import { ILayoutProps } from "./types";

const HIDDEN_PAGE = ["/sign/signIn/", "/sign/signUp/", "/"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const [isOpen] = useRecoilState(isModalState);
  const [isOpen02] = useRecoilState(isModalState02);
  const { onClickMovePage } = movePageMode();
  const { ALL_PAGE } = useAllPageLink();
  const router = useRouter();
  const hiddenPage = HIDDEN_PAGE.includes(router.asPath);
  const page = [
    ALL_PAGE.community.includes(router.asPath),
    ALL_PAGE.market.includes(router.asPath),
    "/myPage/".includes(router.asPath),
  ];

  return (
    <>
      {isOpen && <Modal01></Modal01>}
      {isOpen02 && <Modal02></Modal02>}

      {!hiddenPage && (
        <>
          <LayoutHeader
            page={page}
            allPage={ALL_PAGE}
            onClickMovePage={onClickMovePage}
          ></LayoutHeader>
          <LayoutNavigation
            page={page}
            allPage={ALL_PAGE}
            onClickMovePage={onClickMovePage}
          ></LayoutNavigation>
        </>
      )}
      <div>{props.children}</div>
    </>
  );
}
