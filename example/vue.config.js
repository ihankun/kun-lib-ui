const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "msun-base": path.resolve(__dirname, "../src/main.ts"),
        "@": path.resolve(__dirname, "../src"),
        "@msun/base": path.resolve(__dirname, "../dist/bundle.js"),
        "msun-pbr": path.resolve(__dirname, "../dist/bundle.js"),
      },
    },
  },
});
