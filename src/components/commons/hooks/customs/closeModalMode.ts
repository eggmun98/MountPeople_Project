import { useRecoilState } from "recoil";
import { isModalState, isModalState02 } from "../../stores";

export const closeModalMode = (): {
  onClickClose: () => void;
} => {
  const [_, setIsOpen] = useRecoilState(isModalState);

  const onClickClose = (): void => {
    setIsOpen((prev) => !prev);
  };

  return {
    onClickClose,
  };
};
