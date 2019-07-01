const extraNodeModules = require('node-libs-browser');


module.exports = {
  extraNodeModules,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
