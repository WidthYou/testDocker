const { override, addLessLoader } = require("customize-cra");
module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        relativeUrls: false,
        modifyVars: { 'primary-color': '#1DA57A' },
  }));
