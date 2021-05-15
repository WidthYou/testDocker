const { override, addLessLoader } = require("customize-cra");
module.exports = override(
    addLessLoader({
        // lessOptions: {
            javascriptEnabled: true,
            // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
            relativeUrls: false,
            modifyVars: { 'primary-color': '#1DA57A', },
            // cssModules: {
            //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
            //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
            // }
        // } 
  }));
