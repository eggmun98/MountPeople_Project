import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";

export default function CommunityListUI(): JSX.Element {
  return (
    <>
      <ListHeader></ListHeader>
      <ListBody></ListBody>
      <ListFooter></ListFooter>
    </>
  );
}
