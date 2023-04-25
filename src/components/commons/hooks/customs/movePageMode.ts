import { useRouter } from "next/router";

export const movePageMode = (): {
  onClickMovePage: (link: string) => () => Promise<void>;
} => {
  const router = useRouter();
  const onClickMovePage = (link: string) => async (): Promise<void> => {
    await router.push(link);
  };

  return {
    onClickMovePage,
  };
};
