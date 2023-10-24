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
      background: {
        values: [
          {
            name: "gray",
            value: "#808080",
          },
        ],
      },
    }
  },
};

export default preview;
