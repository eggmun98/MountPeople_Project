import { useRouter } from "next/router";
import LayoutHeader from "./header";
import { includes } from "lodash";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_PAGE = ["/sign/signIn", "/sign/signUp"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const hiddenPage = HIDDEN_PAGE.includes(router.asPath);

  return (
    <>
      {!hiddenPage && <LayoutHeader></LayoutHeader>}
      <div>{props.children}</div>
    </>
  );
}
