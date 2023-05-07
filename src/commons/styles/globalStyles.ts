import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Regular";
  }

  @font-face {
    font-family: "mont01";
    src: url(/font/mont01.otf);
  }

  @font-face {
    font-family: "mont02";
    src: url(/font/mont02.otf);
  }

  @font-face {
    font-family: "suite01";
    src: url(/font/suite01.otf);
  }
`;
