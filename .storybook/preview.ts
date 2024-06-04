import { Preview } from '@storybook/react';

const preview: Preview = {
  args: { locale: 'fi'},
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;