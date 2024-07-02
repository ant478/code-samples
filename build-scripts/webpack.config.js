const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackExcludeEntry = require('webpack-exclude-entry');
const { merge } = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devServerConfig = require('./dev-server');
const paths = require('./paths');
const {
  getWorkerEntries,
  getServiceWorkersEntries,
  pathResolve,
} = require('./helpers');

let localWebpackConfig;

try {
  localWebpackConfig = require('./webpack.config.local.js');
} catch (error) {
  localWebpackConfig = {};
}

const isDevelopment = process.env.NODE_ENV === 'development';

const workerEntries = getWorkerEntries();
const serviceWorkerEntries = getServiceWorkersEntries();
const workerNames = Object.keys(workerEntries);
const serviceWorkerNames = Object.keys(serviceWorkerEntries);

module.exports = () => merge(
  {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-cheap-module-source-map' : undefined,
    performance: false,
    entry: {
      main: {
        import: paths.mainEntry,
        dependOn: 'raw-code-samples',
      },
      'raw-code-samples': {
        import: paths.rawCodeSamplesEntry,
      },
      initial: {
        import: paths.initialEntry,
        runtime: false,
      },
      ...serviceWorkerEntries,
      ...workerEntries,
    },
    output: {
      publicPath: paths.publicPath,
      path: paths.output,
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunks/[name].[contenthash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: ({ name }) => !['initial', ...workerNames, ...serviceWorkerNames].includes(name),
            enforce: true,
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
      concatenateModules: false,
      minimizer: [
        new TerserPlugin({
          exclude: /raw-code-samples/,
        }),
      ],
    },
    module: {
      noParse: [
        paths.benchmarkModule,
      ],
      rules: [
        isDevelopment && {
          enforce: 'pre',
          test: /\.js$/,
          use: ['source-map-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [paths.nodeModules, paths.rawCodeSamplesFolder],
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
        {
          test: /\.(jpeg|png|webp|svg)$/,
          oneOf: [
            {
              resourceQuery: /svgr/,
              use: [
                'babel-loader',
                {
                  loader: '@svgr/webpack',
                  options: {
                    babel: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /inline/,
              type: 'asset/inline',
            },
            {
              type: 'asset/resource',
              generator: {
                filename: 'images/[name].[contenthash][ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash][ext]',
          },
        },
      ].filter(Boolean),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        src: paths.src,
        img: paths.img,
        vendor: paths.vendor,
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
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.indexHtml,
        inject: false,
        templateParameters: {
          isDevelopment,
          inlinePatterns: [
            /initial/,
          ],
          loadPatterns: [
            /main/,
            /raw-code-samples/,
            /runtime/,
            /vendors/,
          ],
          workersPatterns: workerNames.reduce((acc, key) => ({
            [key]: new RegExp(key),
            ...acc,
          }), {}),
          serviceWorkersPatterns: serviceWorkerNames.reduce((acc, key) => ({
            [key]: new RegExp(key),
            ...acc,
          }), {}),
        },
      }),
      new CopyPlugin({
        patterns: [
          { from: paths.public, to: paths.output },
          isDevelopment && { from: pathResolve('node_modules/@ant478/fps-meter/dist'), to: `${paths.output}/fps-meter` },
        ].filter(Boolean),
      }),
      new WebpackExcludeEntry([/initial/]),
    ],
  },
  devServerConfig,
  localWebpackConfig,
);
