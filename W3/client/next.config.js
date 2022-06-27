const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withCSS, withSass, {
  exportPathMap: (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => { },
  env: {
  },
  typescript: {
    ignoreBuildErrors: true,
    
  }
}]);
