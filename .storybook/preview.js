import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/common/styles/theme'; // 경로를 프로젝트의 theme 파일 위치에 맞게 조정해주세요.

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
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
  decorators: [...decorators],  // decorators를 preview 객체에 추가합니다.
};

export default preview;
