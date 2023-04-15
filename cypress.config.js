import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'kyw3ef',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://user-onboarding-frascavone.netlify.app/',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
