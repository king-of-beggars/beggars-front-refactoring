import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../src/common/styles/theme';

const GlobalFontStyles = createGlobalStyle`
  /* 도시이야기 */
  @font-face {
    font-family: 'DOSIyagiMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSIyagiMedium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  /* 도스고딕 */
  @font-face {
    font-family: 'DOSGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DOSIyagiMedium', 'DOSGothic', sans-serif;
  }
`;

export const decorators = [
  (Story) => (
    <>
      <GlobalFontStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
