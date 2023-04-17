import LayoutHeader from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <div>{props.children}</div>
    </>
  );
}
