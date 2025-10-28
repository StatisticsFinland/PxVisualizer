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
              small: {
                  name: 'Small screen',
                  styles: {
                      width: '383px',
                      height: '300px',
                  },
                  type: 'desktop',
              },
              large: {
                  name: 'Large screen',
                  styles: {
                      width: '1150px',
                      height: '900px'
                  },
                  type: 'desktop',
              },
              mobile: {
                  name: 'Mobile',
                  styles: {
                      width: '540px',
                      height: '960px',
                  },
                  type: 'mobile',
              },
              tablet: {
                  name: 'Tablet',
                  styles: {
                      width: '900px',
                      height: '600px',
                  },
                  type: 'tablet',
              },
          }
      },
  },
  tags: ['autodocs']
};

export default preview;