import { useRouter } from "next/router";

export const movePageMode = (): {
  onClickMovePage: (link: string) => () => Promise<void>;
} => {
  const router = useRouter();

  // 페이지 이동 함수
  const onClickMovePage = (link: string) => async (): Promise<void> => {
    await router.push(link);
  };

  return {
    onClickMovePage,
  };
};
