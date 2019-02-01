const { override, useEslintRc, addBabelPlugin } = require('customize-cra');

module.exports = override(
  useEslintRc(),
  addBabelPlugin(
    ['babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false,
        ssr: false,
        minify: false
      },
      'macros'
    ]
  )
);
