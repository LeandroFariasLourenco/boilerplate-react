require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: `${process.env.SRC}${process.env.PROJECT_NAME}-index.tsx`,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./views/${process.env.PROJECT_NAME}-index.pug`,
      filename: './index.html',
    }),
    new LodashPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
