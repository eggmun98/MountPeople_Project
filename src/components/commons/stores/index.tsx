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

// 마켓 댓글, 대댓글 열기 닫기
export const answerIndexState = atom<number>({
  key: "answerIndexState",
  default: -1,
});

// 마켓 대댓글 수정창 열기 닫기
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

// 마켓 이미지
export const imagesState02 = atom<string[]>({
  key: "imagesState02",
  default: ["", "", ""],
});

// 프로필 이미지 변수
export const imagesState03 = atom<string>({
  key: "imagesState03",
  default: "",
});

// 엑세스 토큰 변수
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// 새로고침시 실행 함수
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

// 모달01 - 에러 메세지 모달창 온오프 변수
export const isModalState = atom({
  key: "isModalState",
  default: false,
});

// 모달01 - 메세지 변수
export const messageState = atom({
  key: "isMessageState",
  default: "",
});

// 모달01 - 링크 변수
export const linkState = atom({
  key: "linkState",
  default: "",
});

// 모달02 - 비밀번호 변경, 충전 모달 온오프 변수
export const isModalState02 = atom({
  key: "isModalState02",
  default: false,
});

// 모달02 - 비밀번호 변경 함수, 충전 함수 공용 변수
export const inputState = atom({
  key: "inputState",
  default: "",
});

// 모달02 - 비밀번호 변경 모드인지 충전 모드인지 구분 변수
export const isModeState = atom({
  key: "isModeState",
  default: false,
});

// 커뮤니티 게시글 번호
export const numberState = atom<number>({
  key: "numberState",
  default: 1,
});
