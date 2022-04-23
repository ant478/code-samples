const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let localWebpackConfig;

try {
  localWebpackConfig = require('./webpack.config.local.js');
} catch (error) {
  localWebpackConfig = {};
}

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = () => merge(
  {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-cheap-module-source-map' : undefined,
    performance: false,
    entry: {
      main: {
        import: path.resolve(__dirname, '../src/index.js'),
        dependOn: 'raw-code-samples',
      },
      'raw-code-samples': {
        import: path.resolve(__dirname, '../src/raw-code-samples/index.js'),
      },
    },
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/',
      path: path.resolve(__dirname, '../build'),
    },
    optimization: {
      runtimeChunk: 'single',
      minimizer: [
        new TerserPlugin({
          exclude: /raw-code-samples.*\.js/,
        }),
      ],
    },
    module: {
      noParse: [
        /\\node_modules\\benchmark\\/,
      ],
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/, /\\src\\raw-code-samples\\/],
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
        src: path.resolve(__dirname, '../src'),
        vendor: path.resolve(__dirname, '../vendor'),
      },
      fallback: {
        process: require.resolve('process/browser'),
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
        filename: 'main.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        inject: false,
      }),
    ],
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 4780,
      liveReload: false,
      hot: false,
      static: {
        directory: path.join(__dirname, '../build'),
      },
    },
  },
  localWebpackConfig,
);
