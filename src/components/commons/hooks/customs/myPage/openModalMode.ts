import { useRecoilState } from "recoil";
import { isModalState02, isModeState } from "../../../stores";

export const openModalMode = (): {
  onClickOpenModal: (mode: string) => () => void;
  onClickCloseModal: () => void;
} => {
  const [isOpen02, setIsOpen02] = useRecoilState(isModalState02);
  const [isMode, setIsMode] = useRecoilState(isModeState);

  const onClickOpenModal = (mode: string) => (): void => {
    setIsOpen02((prev) => !prev);
    if (mode === "pass") {
      setIsMode(true);
    } else {
      setIsMode(false);
    }
  };
  const onClickCloseModal = (): void => {
    setIsOpen02((prev) => !prev);
  };

  return {
    onClickOpenModal,
    onClickCloseModal,
  };
};
