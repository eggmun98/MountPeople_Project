import { atom } from "recoil";

export const originIndexState = atom<number>({
  key: "originIndexState",
  default: -1,
});
