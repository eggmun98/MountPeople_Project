import { useRouter } from "next/router";

export const useAllPageLink = (): {
  ALL_PAGE: {
    community: string[];
    market: string[];
  };
} => {
  const router = useRouter();

  const ALL_PAGE = {
    community: [
      `/communitys/community/${String(router.query.page)}/`,
      `/communitys/community/${String(router.query.page)}/edit/`,
      "/communitys/",
    ],
    market: [
      `/markets/market/${String(router.query.page)}/`,
      `/markets/market/${String(router.query.page)}/edit/`,
      "/markets/",
    ],
  };

  return {
    ALL_PAGE,
  };
};
