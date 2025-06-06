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
      viewport: {
          viewports: {
              website: {
                  name: 'Website',
                  styles: {
                      width: '766px',
                      height: '600px',
                  },
                  type: 'desktop',
              },
          },
      },
  },
  tags: ['autodocs']
};

export default preview;