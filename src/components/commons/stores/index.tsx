import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

// 커뮤니티 댓글 수정창 열기 닫기
export const originIndexState = atom<number>({
  key: "originIndexState",
  default: -1,
});

// 마켓 댓글 수정창 열기 닫기
export const originIndexState02 = atom<number>({
  key: "originIndexState02",
  default: -1,
});

// 마켓 댓글 대댓글 열기 닫기
export const answerIndexState = atom<number>({
  key: "answerIndexState",
  default: -1,
});

export const answerEditIndexState = atom<number>({
  key: "answerEditIndexState",
  default: -1,
});

// 커뮤니티 우편번호
export const zipCodeState = atom<string>({
  key: "zipCodeState",
  default: "",
});

// 커뮤니티 주소
export const addressState = atom<string>({
  key: "addressState",
  default: "",
});

// 커뮤니티 이미지
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
