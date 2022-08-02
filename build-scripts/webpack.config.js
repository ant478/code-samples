const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devServerConfig = require('./dev-server');
const paths = require('./paths');
const { getWorkerEntries } = require('./helpers');

let localWebpackConfig;

try {
  localWebpackConfig = require('./webpack.config.local.js');
} catch (error) {
  localWebpackConfig = {};
}

const isDevelopment = process.env.NODE_ENV === 'development';

const workerEntries = getWorkerEntries();
const workerNames = Object.keys(workerEntries);

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
      ...workerEntries,
    },
    output: {
      filename: ({ chunk: { name } }) => {
        if (workerNames.includes(name)) {
          return 'workers/[name].[contenthash].js';
        }

        return '[name].[contenthash].js';
      },
      publicPath: paths.publicPath,
      path: paths.output,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: ({ name }) => !workerNames.includes(name),
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
      ],
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
        },
      }),
    ],
  },
  devServerConfig,
  localWebpackConfig,
);
