const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devConfig = require('./webpack.config.dev.js');

module.exports = (options = {}, argv = {}) => merge(
  {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../build'),
    },
    module: {
      noParse: [
        /benchmark/,
      ],
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  importer: globImporter(),
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
      fallback: {
        'process': require.resolve('process/browser'),
      },
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!.gitkeep',
        ],
      }),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        inject: false,
      }),
    ],
  },
  (argv.mode === 'development' ? devConfig(options) : {}),
);
