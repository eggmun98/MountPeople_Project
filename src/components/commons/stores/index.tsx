import { atom } from "recoil";

// 댓글 수정창 열기 닫기 변수
export const originIndexState = atom<number>({
  key: "originIndexState",
  default: -1,
});

export const zipCodeState = atom<string>({
  key: "zipCodeState",
  default: "",
});

export const addressState = atom<string>({
  key: "addressState",
  default: "",
});
