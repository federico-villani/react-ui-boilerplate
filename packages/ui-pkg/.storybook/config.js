import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../lib', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


// import { configure, addDecorator } from '@storybook/react';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';
// import { theme } from '../lib/theme';
/**
 * Decorator to set a default viewport
 */
// import { configureViewport } from '@storybook/addon-viewport';
// configureViewport({
//   defaultViewport: 'iphone6'
// });

/**
 * addons options decorator -- WIP
 */
// import { configure, addDecorator, addParameters } from '@storybook/react';
// import { withOptions } from '@storybook/addon-options';
//
// addDecorator(
//   withOptions({
//   options: {
//     name: 'CRA Kitchen Sink',
//     url: 'https://github.com/storybooks/storybook/tree/master/examples/cra-kitchen-sink',
//     goFullScreen: false,
//     showAddonsPanel: false,
//     showSearchBox: false,
//     addonPanelInRight: false,
//     sortStoriesByKind: false,
//     hierarchySeparator: /\./,
//     hierarchyRootSeparator: /\|/,
//     enableShortcuts: true,
//   },
//   })
// );

/**
 * Decorator to use styled components themeprovider --- WIP
 */
// const themes = [theme];
// addDecorator(withThemesProvider(themes));
