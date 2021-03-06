const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('./paths');

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
    },
    output: {
      filename: '[name].[contenthash].js',
      publicPath: paths.publicPath,
      path: paths.output,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: 'single',
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
          test: /\.(jpeg|png|webp)$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              type: 'asset/inline',
            },
            {
              type: 'asset/resource',
              generator: {
                filename: '[path][name].[contenthash][ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          type: 'asset/inline',
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
          filesToInline: [/initial/],
        },
      }),
    ],
    devServer: {
      client: false,
      webSocketServer: false,
      https: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 4780,
      liveReload: false,
      hot: false,
      static: {
        publicPath: paths.publicPath,
        directory: paths.output,
      },
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
  },
  localWebpackConfig,
);
