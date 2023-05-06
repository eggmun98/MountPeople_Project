import { useRecoilState } from "recoil";
import { isModalState, linkState, messageState } from "../../stores";
import { useRouter } from "next/router";

export const selectionModalMode = (): {
  onClickClose: () => void;
  onClickModal: (str: string, link?: string) => () => void;
} => {
  const [_, setIsModal] = useRecoilState(isModalState);
  const [__, setIsMessages] = useRecoilState(messageState);
  const [links, setLinks] = useRecoilState(linkState);
  const router = useRouter();

  const onClickClose = (): void => {
    setIsModal((prev) => !prev);
    if (links) {
      void router.push(links);
      setLinks("");
    }
  };

  const onClickModal = (str: string, link?: string) => async () => {
    setLinks(link ?? "");
    setIsMessages(str);
    setIsModal((prev) => !prev);
  };

  return {
    onClickClose,
    onClickModal,
  };
};
