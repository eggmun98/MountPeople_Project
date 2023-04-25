import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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

export const imagesState = atom<string[]>({
  key: "imagesState",
  default: ["", "", ""],
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
