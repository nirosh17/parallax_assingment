const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true; @import "${path.resolve(__dirname, './src/', 'theme.less')}";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
