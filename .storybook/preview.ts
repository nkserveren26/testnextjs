import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //プレビュー画面のサイズ設定
    viewport: {
      viewports: {
        iphonex: {
          name: "iPhone X",
          styles: {
            width: "375px",
            height: "812px"
          },
        },
      },
    },
    //背景色の設定
    backgrounds: {
      values: [
        {
          name: "gray",
          value: "#103461",
        },
      ],
    },
  },
};

export default preview;
