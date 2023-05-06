import { useRecoilState } from "recoil";
import { isModalState } from "../../stores";

export const closeModalMode = (): {
  onClickClose: (num: string) => () => void;
} => {
  const [isOpen, setIsOpen] = useRecoilState(isModalState);

  const onClickClose = (num: string) => (): void => {
    if (num === "01") {
      setIsOpen((prev) => !prev);
    }
  };

  return {
    onClickClose,
  };
};
