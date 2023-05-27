const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        //"kun-lib-ui": path.resolve(__dirname, "../src/main.ts"),
        "@": path.resolve(__dirname, "../src"),
        "@ihankun/kun-lib-ui": path.resolve(__dirname, "../dist/bundle.js"),
        "kun-lib-ui": path.resolve(__dirname, "../dist/bundle.js"),
      },
    },
  },
});
