const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/common/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-jest",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  
  webpackFinal: async (storybookConfig) => {
    // 웹팩 별칭 설정을 가져옵니다.
    const alias = {
      "@common-assets": path.resolve(__dirname, "../src/common/assets/"),
      "@common-components": path.resolve(__dirname, "../src/common/components/"),
      "@common-constants": path.resolve(__dirname, "../src/common/constants/"),
      "@common-providers": path.resolve(__dirname, "../src/common/providers/"),
      "@common-styles": path.resolve(__dirname, "../src/common/styles/"),
      "@common-utils": path.resolve(__dirname, "../src/common/utils/"),
      "@feature-auth" : path.resolve(__dirname, "../src/features/auth"),
      "@feature-board" : path.resolve(__dirname, "../src/features/board"),
      "@feature-cashbook" : path.resolve(__dirname, "../src/features/cashbook"),
      "@feature-deal" : path.resolve(__dirname, "../src/features/deal"),
      "@feature-main" : path.resolve(__dirname, "../src/features/main"),
      "@router" : path.resolve(__dirname, "../src/router")
    };

    // Storybook의 웹팩 설정에 별칭을 병합합니다.
    storybookConfig.resolve.alias = {
      ...storybookConfig.resolve.alias,
      ...alias,
    };

    return storybookConfig;
  },
};

export default config;
