import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import dunggeunmo_woff2 from "../../../assets/font/DungGeunMo.woff2";
import dunggeunmo_woff from "../../../assets/font/DungGeunMo.woff";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'dunggeunmo';
    src: url('${dunggeunmo_woff2}') format('woff2'), url('${dunggeunmo_woff}') format('woff');
    font-weight: 400;
    font-style: normal
  }
  body {
    font-family: 'dunggeunmo';
  }
`;

type Props = {
  children: React.ReactNode;
};

export const OriginalThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </>
  );
};
