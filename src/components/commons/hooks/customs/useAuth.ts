import { useEffect } from "react";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";
import { selectionModalMode } from "./closeModalMode";

export const useAuth = (): void => {
  const { onClickModal } = selectionModalMode();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const accessToken = await getAccessToken();
      if (accessToken === undefined) {
        onClickModal("로그인 후 이용 가능합니다.", "/sign/signIn")();
      }
    })();
  }, []);
};
