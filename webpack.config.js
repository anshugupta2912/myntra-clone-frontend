const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Starting point of the app (script.js imports style.css)
  entry: "./src/script.js",

  // Where the production build goes
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      // Lets us `import "./style.css"` from JavaScript
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    // Copies src/index.html into dist and adds the <script> tag automatically
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // Local server for `npm start`
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
